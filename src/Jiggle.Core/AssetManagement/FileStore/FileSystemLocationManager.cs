using System;
using Jiggle.Core.Entities;
using System.IO;
using System.Collections.Generic;

namespace Jiggle.Core.AssetManagement.FileStore
{
    /// <summary>
    /// Manage locations on the file system by calculating file system paths.
    /// </summary>
    /// <seealso cref="IFileSystemLocationManager"/>
    public class FileSystemLocationManager : IFileSystemLocationManager
    {
        readonly FileSystemConfiguration configuration;

        /// <summary>
        /// Initializes a new instance of the <see cref="T:Jiggle.Core.AssetStorage.FileSystemLocationManager"/> class.
        /// </summary>
        /// <param name="configuration">The configuration to use.</param>
        public FileSystemLocationManager(FileSystemConfiguration configuration)
        {
            this.configuration = configuration ?? throw new ArgumentNullException(nameof(configuration));
        }

        /// <inheritdoc/>
        public string GetPathForOriginal(Asset asset)
        {
            if (asset == null) throw new ArgumentNullException(nameof(asset));

            return CalculatePath(configuration.OriginalRootFilepath, asset, asset.OriginalFileName);
        }

        /// <inheritdoc/>
        public string GetPathForThumbnail(Asset asset, int width, int height)
        {
            if (asset == null) throw new ArgumentNullException(nameof(asset));

            var ext = Path.GetExtension(asset.OriginalFileName);
            var filename = $"{Path.GetFileNameWithoutExtension(asset.OriginalFileName)}_{width}_{height}{ext}";

            return CalculatePath(configuration.ThumbRootFilepath, asset, filename);
        }

        private string CalculatePath(string rootPath, Asset asset, string filename)
        {
            if (string.IsNullOrWhiteSpace(rootPath)) throw new ArgumentNullException(nameof(rootPath));
            if (asset == null) throw new ArgumentNullException(nameof(asset));

            var pathSegments = new List<string> { rootPath };

            pathSegments.Add(asset.TakenTime.Year.ToString());
            pathSegments.Add(asset.TakenTime.Month.ToString());
            pathSegments.Add(asset.TakenTime.Day.ToString());
            pathSegments.Add(filename);

            return Path.Combine(pathSegments.ToArray());
        }
    }
}