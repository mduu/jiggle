using System;
using System.Threading.Tasks;
using Jiggle.Core.AssetManagement.FileStore;
using Jiggle.Core.Entities;

namespace Jiggle.Core.AssetManagement.Import
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

			// TODO Find or create album

            var asset = new Asset
            {
                Id = Guid.NewGuid(),
                // TODO Initialize asset
            };

            // TODO Build Thumbnail

            var locationInfoOriginal = storeWriter.WriteOriginalFileToStoreAsync(asset, options.OriginalFileContent);

            // TODO Write thumbnail file

            // TODO Store asset in database

            throw new NotImplementedException();
        }
    }
}
