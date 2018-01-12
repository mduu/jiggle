using System;
using System.Threading.Tasks;
using Jiggle.Core.AssetManagement.FileStore;
using Jiggle.Core.Entities;
using Jiggle.Core.Security;
using Jiggle.Core.Common;
using System.ComponentModel.DataAnnotations;
using System.IO;

namespace Jiggle.Core.AssetManagement.Import
{
    public class AssetImporter : IAssetImporter
    {
        private readonly IStoreWriter storeWriter;
        private readonly IAlbumManager albumManager;
        private readonly IUserService userService;
        private readonly ITagManager tagManager;
        private readonly DatabaseContext context;
        readonly IThumbnailGenerator thumbnailGenerator;

        const int ThumbnailWidth = 200;
        const int ThumbnailHeight = 200;

        public AssetImporter(
            DatabaseContext context,
            IStoreWriter storeWriter,
            IAlbumManager albumManager,
            ITagManager tagManager,
            IUserService userService,
            IThumbnailGenerator thumbnailGenerator)
        {
            this.context = context ?? throw new ArgumentNullException(nameof(context));
            this.storeWriter = storeWriter ?? throw new ArgumentNullException(nameof(storeWriter));
            this.albumManager = albumManager ?? throw new ArgumentNullException(nameof(albumManager));
            this.tagManager = tagManager ?? throw new ArgumentNullException(nameof(tagManager));
            this.userService = userService ?? throw new ArgumentNullException(nameof(userService));
            this.thumbnailGenerator = thumbnailGenerator ?? throw new ArgumentNullException(nameof(thumbnailGenerator));
        }

        public async Task<Asset> ImportAssetAsync(string currentUsername, AssetImportOptions importOptions)
        {
            if (importOptions == null) throw new ArgumentNullException(nameof(importOptions));

            var currentUser = await userService.GetCurrentUserAsync(currentUsername);

            var asset = new Asset
            {
                Id = Guid.NewGuid(),
                ImportedBy = currentUser,
                TakenBy = importOptions.TakenBy,
                TakenTime = importOptions.TakenTime,
            };

            var album = await GetAlbumAsync(currentUser, importOptions);
            asset.Albums.Add(new AlbumAsset { AssetId = asset.Id, AlbumId = album.Id });

            foreach (var tag in tagManager.GetTagsByName(importOptions.Tagnames))
            {
                asset.Tags.Add(new TagAsset 
                {
                    Id = Guid.NewGuid(),
                    TagId = tag.Id,
                    AssetId = asset.Id,
                });
            }

            // Write original
            asset.StorageInfoOriginal = await storeWriter.WriteOriginalFileToStoreAsync(asset, importOptions.OriginalFileContent);

            // Write thumbnail
            var thumbnail = storeWriter.GetThumbnailStream(asset, ThumbnailWidth, ThumbnailHeight);

            importOptions.OriginalFileContent.Seek(0, System.IO.SeekOrigin.Begin);
            var binaryReader = new BinaryReader(importOptions.OriginalFileContent);
            var originalDataLength = (int)importOptions.OriginalFileContent.Length;
            var originalData = binaryReader.ReadBytes(originalDataLength);

            await thumbnailGenerator.GenerateAsync(
                originalData,
                ThumbnailWidth,
                ThumbnailHeight,
                thumbnail.Item1);

            asset.StorageInfoThumbnails = thumbnail.Item2;

            context.Assets.Add(asset);

            return asset;
        }

        private async Task<Album> GetAlbumAsync(User currentUser, AssetImportOptions importOptions)
        {
            return importOptions.ExistingAlbumId.HasValue
                ? await albumManager.GetAlbumByIdAsync(importOptions.ExistingAlbumId.Value)
                : albumManager.CreateNewAlbum(
                                         importOptions.NewAlbumName,
                                         importOptions.NewAlbumDescription,
                                         currentUser.Id,
                                         importOptions.ParentAlbumId);
        }
    }
}
