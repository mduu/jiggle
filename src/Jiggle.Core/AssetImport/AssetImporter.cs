using System;
using System.Threading.Tasks;
using Jiggle.Core.Entities;

namespace Jiggle.Core.AssetImport
{
    public class AssetImporter : IAssetImporter
    {
        public AssetImporter()
        {
        }

        public Task<Asset> ImportAssetAsync(AssetImportOptions options)
        {
            if (options == null) throw new ArgumentNullException(nameof(options));

            throw new NotImplementedException();
        }
    }
}
