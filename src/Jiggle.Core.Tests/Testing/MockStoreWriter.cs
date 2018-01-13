using System.IO;
using System.Threading.Tasks;
using Jiggle.Core.Entities;
using System.Collections.Generic;
using Jiggle.Core.AssetManagement.FileStore;
using System;

namespace Jiggle.Core.Tests.Testing
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

        public Tuple<Stream, string> GetThumbnailStream(Asset asset, int width, int height)
        {
            throw new NotImplementedException();
        }
    }
}
