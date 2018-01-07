﻿using System;
using System.IO;
using System.Threading.Tasks;
using Jiggle.Core.Entities;

namespace Jiggle.Core.AssetStorage
{
    public class FileSystemStore : IStoreWriter
    {
        readonly IFileSystemLocationManager locationManager;

        public FileSystemStore(IFileSystemLocationManager locationManager)
        {
            this.locationManager = locationManager;
        }

        /// <inheritdoc/>
        public async Task<string> WriteOriginalFileToStoreAsync(Asset asset, Stream originalFileContent)
        {
            if (asset == null) throw new ArgumentNullException(nameof(asset));
            if (originalFileContent == null) throw new ArgumentNullException(nameof(originalFileContent));

            var originalFilepath = locationManager.GetPathForOriginal(asset);
            await WriteStreamToFileAsync(originalFileContent, originalFilepath);

            return originalFilepath;
        }

        /// <inheritdoc/>
        public async Task<string> WriteThumbnailFileToStoreAsync(Asset asset, Stream thumbnailFileContent, int width, int height)
        {
            if (asset == null) throw new ArgumentNullException(nameof(asset));
            if (thumbnailFileContent == null) throw new ArgumentNullException(nameof(thumbnailFileContent));

            var thumbnailFilepath = locationManager.GetPathForThumbnail(asset, width, height);
            await WriteStreamToFileAsync(thumbnailFileContent, thumbnailFilepath);

            return thumbnailFilepath;

        }

        private static async Task WriteStreamToFileAsync(Stream fileContent, string filepath)
        {
            if (fileContent == null) throw new ArgumentNullException(nameof(fileContent));
            if (string.IsNullOrWhiteSpace(filepath)) throw new ArgumentNullException(nameof(filepath));

            using (var fileStream = File.Create(filepath))
            {
                fileContent.Seek(0, SeekOrigin.Begin);
                await fileContent.CopyToAsync(fileStream);
            }
        }
    }
}
