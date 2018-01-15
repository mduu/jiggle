using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Jiggle.Core.AssetManagement;
using Jiggle.Core.Entities;
using Jiggle.Core.Tests.Testing;
using Xunit;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Jiggle.Core.Tests.AssetManagement
{
    [Collection(DatabaseCollection.CollectionNanem)]
    public class AlbumNanagerTests : DatabaseTestsBase
    {
        private AlbumManager albumManager;
        private Album album1;
        private Album album2;

        public AlbumNanagerTests(DatabaseFixture fixture)
            : base(fixture)
        {
            SetupDefaultTestScenario();
        }

        [Fact]
        public async Task Test_GetAlbumByIdAsync()
        {
            // Arrange

            // Act
            var album = await albumManager.GetAlbumByIdAsync(album1.Id);

            // Assert
            Assert.NotNull(album);
            Assert.Equal(album1.Id, album.Id);
            Assert.NotNull(album.CreatedBy);
            Assert.NotNull(album.ChildAlbums);
            Assert.Equal(2, album.ChildAlbums.Count);
        }

        [Fact]
        public async Task Test_GetAlbumByIdAsync_InvalidId()
        {
            // Arrange

            // Act
            await Assert.ThrowsAsync<InvalidOperationException>(() => albumManager.GetAlbumByIdAsync(Guid.NewGuid()));

            // Assert
        }

        [Fact]
        public async Task Test_GetAlbumsByParentAlbumIdAsync()
        {
            // Arrange

            // Act
            var childAlbums = (await albumManager.GetAlbumsByParentAlbumIdAsync(album1.Id))
                .ToList();

            // Assert
            Assert.NotEmpty(childAlbums);
            Assert.Equal(2, childAlbums.Count());
            Assert.Equal(album1.Id, childAlbums[0].ParentAlbumId);
            Assert.Equal(album1.Id, childAlbums[1].ParentAlbumId);
        }

        [Fact]
        public async Task Test_GetAlbumsByParentAlbumIdAsync_InvalidParent()
        {
            // Arrange

            // Act
            var childAlbums = (await albumManager.GetAlbumsByParentAlbumIdAsync(Guid.NewGuid()))
                .ToList();

            // Assert
            Assert.Empty(childAlbums);
        }

        [Fact]
        public void Test_CreateNewAlbum_WithoutParent()
        {
            // Arrange
            const string albumname = "New Album";
            const string albumdescription = "Albumdescription";
            var user = databaseContext.Users.First();

            // Act
            var album = albumManager.CreateNewAlbum(
                albumname,
                albumdescription,
                user.Id);
            databaseContext.SaveChanges();

            // Assert
            Assert.NotNull(album);
            Assert.Equal(albumname, album.Name);
            Assert.Equal(albumdescription, album.Description);
            Assert.Equal(user.Id, album.CreatedById);
        }

        [Fact]
        public void Test_CreateNewAlbum_WithParent()
        {
            // Arrange
            const string albumname = "New Album";
            const string albumdescription = "Albumdescription";
            var user = databaseContext.Users.First();

            // Act
            var album = albumManager.CreateNewAlbum(
                albumname,
                albumdescription,
                user.Id,
                album1.Id);
            databaseContext.SaveChanges();

            // Assert
            Assert.NotNull(album);
            Assert.Equal(albumname, album.Name);
            Assert.Equal(albumdescription, album.Description);
            Assert.Equal(user.Id, album.CreatedById);
            Assert.Equal(album1.Id, album.ParentAlbumId);
        }

        [Fact]
        public void Test_CreateNewAlbum_With_Invalid_Parent()
        {
            // Arrange
            const string albumname = "New Album";
            const string albumdescription = "Albumdescription";
            var user = databaseContext.Users.First();

            // Act
            var album = albumManager.CreateNewAlbum(
                albumname,
                albumdescription,
                user.Id,
                Guid.NewGuid());
            
            Assert.Throws<DbUpdateException>(() => databaseContext.SaveChanges());

            // Assert
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

            databaseContext.Albums.Add(result);

            return result;
        }

        private void SetupDefaultTestScenario()
        {
            albumManager = new AlbumManager(databaseContext);
            album1 = CreateAlbum("My Album 1", new[] { "My Childalbum 1", "My Childalbum 2" });
            album2 = CreateAlbum("My Album 2");
            databaseContext.SaveChanges();
        }
    }
}
