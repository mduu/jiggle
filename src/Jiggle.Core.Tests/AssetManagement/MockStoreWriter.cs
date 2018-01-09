using System.IO;
using System.Threading.Tasks;
using Jiggle.Core.Entities;
using System.Collections.Generic;
using Jiggle.Core.AssetManagement.FileStore;

namespace Jiggle.Core.Tests.AssetManagement
{
    public class MockStoreWriter : IStoreWriter
    {
        public ICollection<Asset> WrittenOriginalAssets { get; } = new List<Asset>();
        public ICollection<Asset> WrittenThumbnailAssets { get; } = new List<Asset>();

        public async Task<string> WriteOriginalFileToStoreAsync(Asset asset, Stream originalFileContent)
        {
            WrittenOriginalAssets.Add(asset);

            return asset.OriginalFileName;
        }

        public async Task<string> WriteThumbnailFileToStoreAsync(Asset asset, Stream thumbnailFileContent, int width, int height)
        {
            WrittenThumbnailAssets.Add(asset);
 
            return asset.OriginalFileName;
        }
    }
}
