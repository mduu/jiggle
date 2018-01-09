using System;
using Xunit;
using Jiggle.Core.AssetImport;
using System.Threading.Tasks;

namespace Jiggle.Core.Tests.AssetStorage
{
    public class AssetImporterTests
    {
        [Fact]
        public async Task ImportWithNullOptions()
        {
            // Arrage
            var storeWriter = new MockStoreWriter();
            var assetImporter = new AssetImporter(storeWriter);

            // Act
            var exception = await Assert.ThrowsAsync<ArgumentNullException>(() => assetImporter.ImportAssetAsync(null));

            // Assert
            Assert.Equal("options", exception.ParamName);
        }
    }
}
