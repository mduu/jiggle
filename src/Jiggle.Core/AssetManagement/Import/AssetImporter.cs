using System;
using System.Threading.Tasks;
using Jiggle.Core.AssetManagement.FileStore;
using Jiggle.Core.Entities;
using Jiggle.Core.Security;
using Jiggle.Core.Common;
using System.IO;
using System.Collections.Generic;

namespace Jiggle.Core.AssetManagement.Import
{
    /// <summary>
    /// Implements <see cref="IAssetImporter"/>.
    /// </summary>
    /// <seealso cref="IAssetImporter"/>
    public class AssetImporter : IAssetImporter
    {
        private readonly IStoreWriter storeWriter;
        private readonly IAlbumManager albumManager;
        private readonly IUserService userService;
        private readonly ITagManager tagManager;
        private readonly DatabaseContext context;
        readonly IThumbnailGenerator thumbnailGenerator;
        readonly ThumbnailSettings thumbnailSettings;

        /// <summary>
        /// Initializes a new instance of the <see cref="T:Jiggle.Core.AssetManagement.Import.AssetImporter"/> class.
        /// </summary>
        public AssetImporter(
            ThumbnailSettings thumbnailSettings,
            DatabaseContext context,
            IStoreWriter storeWriter,
            IAlbumManager albumManager,
            ITagManager tagManager,
            IUserService userService,
            IThumbnailGenerator thumbnailGenerator)
        {
            this.thumbnailSettings = thumbnailSettings ?? throw new ArgumentNullException(nameof(thumbnailSettings));
            this.context = context ?? throw new ArgumentNullException(nameof(context));
            this.storeWriter = storeWriter ?? throw new ArgumentNullException(nameof(storeWriter));
            this.albumManager = albumManager ?? throw new ArgumentNullException(nameof(albumManager));
            this.tagManager = tagManager ?? throw new ArgumentNullException(nameof(tagManager));
            this.userService = userService ?? throw new ArgumentNullException(nameof(userService));
            this.thumbnailGenerator = thumbnailGenerator ?? throw new ArgumentNullException(nameof(thumbnailGenerator));
        }

        /// <inheritdoc/>
        public async Task<Asset> ImportAssetAsync(string currentUsername, AssetImportOptions importOptions)
        {
            if (string.IsNullOrWhiteSpace(currentUsername)) throw new ArgumentNullException(nameof(currentUsername));
            if (importOptions == null) throw new ArgumentNullException(nameof(importOptions));

            var currentUser = await userService.GetCurrentUserAsync(currentUsername);
            var contentType = MIMEAssistant.GetMIMEType("image.JPG");

            var asset = new Asset
            {
                Id = Guid.NewGuid(),
                OriginalFileName = importOptions.OriginalFilename,
                OriginalFileMimeType = contentType ?? "application/octet-stream",
                ImportedBy = currentUser,
                TakenBy = string.IsNullOrWhiteSpace(importOptions.TakenBy)
                                ? $"{currentUser.Firstname} {currentUser.Lastname}"
                                : importOptions.TakenBy,
                TakenTime = importOptions.TakenTime,
            };

            await AddAlbumAsync(importOptions, currentUser, asset);
            AssignTags(importOptions, asset);
            asset.StorageInfoOriginal = await storeWriter.WriteOriginalFileToStoreAsync(asset, importOptions.OriginalFileContent);
            await GenerateAndStoreThumbnailAsync(importOptions, asset);

            context.Assets.Add(asset);

            return asset;
        }

        private async Task AddAlbumAsync(AssetImportOptions importOptions, User currentUser, Asset asset)
        {
            if (importOptions == null) throw new ArgumentNullException(nameof(importOptions));
            if (currentUser == null) throw new ArgumentNullException(nameof(currentUser));
            if (asset == null) throw new ArgumentNullException(nameof(asset));

            if (asset.Albums == null)
            {
                asset.Albums = new List<AlbumAsset>();
            }

            asset.Albums.Add(new AlbumAsset
            {
                AssetId = asset.Id,
                AlbumId = await FindOrCreateAlbumAsync(currentUser, importOptions)
            });
        }

        private async Task<Guid> FindOrCreateAlbumAsync(User currentUser, AssetImportOptions importOptions)
        {
            if (currentUser == null) throw new ArgumentNullException(nameof(currentUser));
            if (importOptions == null) throw new ArgumentNullException(nameof(importOptions));

            var album = importOptions.ExistingAlbumId.HasValue
                ? await albumManager.GetAlbumByIdAsync(importOptions.ExistingAlbumId.Value)
                : albumManager.CreateNewAlbum(
                                         importOptions.NewAlbumName,
                                         importOptions.NewAlbumDescription,
                                         currentUser.Id,
                                         importOptions.ParentAlbumId);

            return album.Id;
        }

        private void AssignTags(AssetImportOptions importOptions, Asset asset)
        {
            if (importOptions == null) throw new ArgumentNullException(nameof(importOptions));
            if (asset == null) throw new ArgumentNullException(nameof(asset));

            foreach (var tag in tagManager.GetTagsByName(importOptions.Tagnames))
            {
                if (asset.Tags == null)
                {
                    asset.Tags = new List<TagAsset>();
                }

                asset.Tags.Add(new TagAsset
                {
                    Id = Guid.NewGuid(),
                    TagId = tag.Id,
                    AssetId = asset.Id,
                });
            }
        }

        private async Task GenerateAndStoreThumbnailAsync(AssetImportOptions importOptions, Asset asset)
        {
            if (importOptions == null) throw new ArgumentNullException(nameof(importOptions));
            if (asset == null) throw new ArgumentNullException(nameof(asset));

            var thumbnail = storeWriter.GetThumbnailStream(
                asset, 
                thumbnailSettings.ThumbnailWidth, 
                thumbnailSettings.ThumbnailHeight);

            importOptions.OriginalFileContent.Seek(0, SeekOrigin.Begin);
            var binaryReader = new BinaryReader(importOptions.OriginalFileContent);
            var originalDataLength = (int)importOptions.OriginalFileContent.Length;
            var originalData = binaryReader.ReadBytes(originalDataLength);

            await thumbnailGenerator.GenerateAsync(
                originalData,
                thumbnailSettings.ThumbnailWidth,
                thumbnailSettings.ThumbnailHeight,
                thumbnail.Item1);

            await thumbnail.Item1.FlushAsync();
            thumbnail.Item1.Close();

            asset.StorageInfoThumbnails =   thumbnail.Item2;
        }
    }
}
