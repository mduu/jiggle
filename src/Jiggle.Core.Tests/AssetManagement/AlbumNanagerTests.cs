using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Jiggle.Core.AssetManagement;
using Jiggle.Core.Entities;
using Jiggle.Core.Tests.Testing;
using Xunit;
using System.Linq;

namespace Jiggle.Core.Tests.AssetManagement
{
    [Collection("Database collection")]
    public class AlbumNanagerTests : DatabaseTestsBase
    {
        private readonly AlbumManager albumManager;

        public AlbumNanagerTests(DatabaseFixture fixture)
            : base(fixture)
        {
            albumManager = new AlbumManager(fixture.DatabaseContext);
        }

        [Fact]
        public async Task Test_GetAlbumByIdAsync()
        {
            // Arrange
            var album1 = CreateAlbum("My Album 1", new[] { "My Childalbum 1", "My Childalbum 2" });
            var album2 = CreateAlbum("My Album 2");
            fixture.DatabaseContext.SaveChanges();

            // Act
            var album = await albumManager.GetAlbumByIdAsync(album1.Id);

            // Assert
            Assert.NotNull(album);
            Assert.Equal(album1.Id, album.Id);
            Assert.NotNull(album.CreatedBy);
            Assert.NotNull(album.ChildAlbums);
            Assert.Equal(2, album.ChildAlbums.Count);
        }

        private Album CreateAlbum(string albumName, IEnumerable<string> childAlbumNames = null)
        {
            var user = new User
            {
                Id = Guid.NewGuid(),
                Username = "john_doe",
                EmailAddress = "john.doe@email.com",
            };

            ICollection<Album> childAlbums = null;
            if (childAlbumNames != null)
            {
                childAlbums = childAlbumNames.Select(n => new Album
                {
                    Id = Guid.NewGuid(),
                    Name = n,
                    CreatedBy = user,
                }).ToList();
            }

            var result = new Album
            {
                Id = Guid.NewGuid(),
                Name = albumName,
                CreatedBy = user,
                ChildAlbums = childAlbums,
            };

            fixture.DatabaseContext.Albums.Add(result);

            return result;
        }
    }
}
