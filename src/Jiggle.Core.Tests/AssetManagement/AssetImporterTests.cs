using System;
using Xunit;
using System.Threading.Tasks;
using Jiggle.Core.AssetManagement.Import;
using Jiggle.Core.AssetManagement.FileStore;
using Jiggle.Core.Tests.Testing;
using Jiggle.Core.AssetManagement;

namespace Jiggle.Core.Tests.AssetManagement
{
    [Collection("Database collection")]
    public class AssetImporterTests
    {
        private DatabaseFixture fixture;
        private IStoreWriter storeWriter = new MockStoreWriter();
        private IAlbumManager albumManager;

        public AssetImporterTests(DatabaseFixture fixture)
        {
            fixture = fixture ?? throw new ArgumentNullException(nameof(fixture));
        }

        [Fact]
        public async Task ImportWithNullOptions()
        {
            // Arrage
            var assetImporter = new AssetImporter(storeWriter);

            // Act
            var exception = await Assert.ThrowsAsync<ArgumentNullException>(() => assetImporter.ImportAssetAsync(null));

            // Assert
            Assert.Equal("options", exception.ParamName);
        }
    }
}
