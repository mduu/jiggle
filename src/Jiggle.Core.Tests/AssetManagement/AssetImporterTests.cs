using System;
using Xunit;
using System.Threading.Tasks;
using Jiggle.Core.AssetManagement.Import;

namespace Jiggle.Core.Tests.AssetManagement
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
