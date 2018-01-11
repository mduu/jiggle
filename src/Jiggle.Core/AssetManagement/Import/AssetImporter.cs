using System;
using System.Threading.Tasks;
using Jiggle.Core.AssetManagement.FileStore;
using Jiggle.Core.Entities;
using System.Collections.Generic;

namespace Jiggle.Core.AssetManagement.Import
{
    public class AssetImporter : IAssetImporter
    {
        private readonly IStoreWriter storeWriter;
        private readonly IAlbumManager albumManager;

        public AssetImporter(
            IStoreWriter storeWriter,
            IAlbumManager albumManager)
        {
            this.storeWriter = storeWriter ?? throw new ArgumentNullException(nameof(storeWriter));
            this.albumManager = albumManager ?? throw new ArgumentNullException(nameof(albumManager));
        }

        public async Task<Asset> ImportAssetAsync(AssetImportOptions options)
        {
            if (options == null) throw new ArgumentNullException(nameof(options));

            // TODO Get current user

            var album = options.ExistingAlbumId.HasValue
                ? await albumManager.GetAlbumByIdAsync(options.ExistingAlbumId.Value)
                : albumManager.CreateNewAlbum(
                                   options.NewAlbumName, 
                                   options.NewAlbumDescription,
                                   currentUser.Id,
                                   options.);

            var asset = new Asset
            {
                Id = Guid.NewGuid(),
                // TODO Initialize asset
            };
            asset.Albums.Add(new AlbumAsset { AssetId = asset.Id, AlbumId = album.Id });

            // TODO Build Thumbnail

            var locationInfoOriginal = storeWriter.WriteOriginalFileToStoreAsync(asset, options.OriginalFileContent);

            // TODO Write thumbnail file

            // TODO Store asset in database

            throw new NotImplementedException();
        }
    }
}
