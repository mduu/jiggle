using System;
using System.Threading.Tasks;
using Jiggle.Core.Entities;
using Jiggle.Core.AssetStorage;

namespace Jiggle.Core.AssetImport
{
    public class AssetImporter : IAssetImporter
    {
        readonly IStoreWriter storeWriter;

        public AssetImporter(IStoreWriter storeWriter)
        {
            this.storeWriter = storeWriter ?? throw new ArgumentNullException(nameof(storeWriter));
        }

        public Task<Asset> ImportAssetAsync(AssetImportOptions options)
        {
            if (options == null) throw new ArgumentNullException(nameof(options));



            throw new NotImplementedException();
        }
    }
}
