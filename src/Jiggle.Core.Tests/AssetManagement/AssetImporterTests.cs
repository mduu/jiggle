using System;
using Xunit;
using System.Threading.Tasks;
using Jiggle.Core.AssetManagement.Import;
using Jiggle.Core.AssetManagement.FileStore;
using Jiggle.Core.Tests.Testing;
using Jiggle.Core.AssetManagement;
using FakeItEasy;
using Jiggle.Core.Security;

namespace Jiggle.Core.Tests.AssetManagement
{
    [Collection("Database collection")]
    public class AssetImporterTests
    {
        private DatabaseFixture fixture;
        private IStoreWriter storeWriter;
        private IAlbumManager albumManager;
        private ITagManager tagManager;
        private IUserService userService;
        private IThumbnailGenerator thumbnailGenerator;
        private IAssetImporter assetImporter;

        public AssetImporterTests(DatabaseFixture fixture)
        {
            fixture = fixture ?? throw new ArgumentNullException(nameof(fixture));

            storeWriter = new MockStoreWriter();
            albumManager = A.Fake<IAlbumManager>();
            tagManager = A.Fake<ITagManager>();
            userService = A.Fake<IUserService>();
            thumbnailGenerator = A.Fake<IThumbnailGenerator>();
            assetImporter = new AssetImporter(
                fixture.DatabaseContext,
                storeWriter,
                albumManager,
                tagManager,
                userService,
                thumbnailGenerator
            );
        }

        [Fact]
        public async Task ImportWithNullOptions()
        {
            // Arrage

            // Act
            var exception = await Assert.ThrowsAsync<ArgumentNullException>(() 
                => assetImporter.ImportAssetAsync("marc", null));

            // Assert
            Assert.Equal("importOptions", exception.ParamName);
        }
    }
}
