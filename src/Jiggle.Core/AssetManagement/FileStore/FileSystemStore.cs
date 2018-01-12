using System;
using System.IO;
using System.Threading.Tasks;
using Jiggle.Core.Entities;

namespace Jiggle.Core.AssetManagement.FileStore
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
            await WriteStreamToFileAsync(originalFileContent, originalFilepath, false);

            return originalFilepath;
        }

        /// <inheritdoc/>
        public Tuple<Stream, string> GetThumbnailStream(Asset asset, int width, int height)
        {
            var thumbnailFilepath = locationManager.GetPathForThumbnail(asset, width, height);

            string folderpath = Path.GetDirectoryName(thumbnailFilepath);
            if (!Directory.Exists(folderpath))
            {
                Directory.CreateDirectory(folderpath);
            }

            if (File.Exists(thumbnailFilepath))
            {
                File.Delete(thumbnailFilepath);
            }

            return new Tuple<Stream, string>(
                File.Create(thumbnailFilepath),
                thumbnailFilepath);
        }

        private static async Task WriteStreamToFileAsync(Stream fileContent, string filepath, bool allowUpdate)
        {
            if (fileContent == null) throw new ArgumentNullException(nameof(fileContent));
            if (string.IsNullOrWhiteSpace(filepath)) throw new ArgumentNullException(nameof(filepath));

            // Check that the file does not already exists
            if (File.Exists(filepath))
            {
                if (!allowUpdate)
                {
                    throw new InvalidOperationException($"File [{filepath}]");
                }
                else
                {
                    File.Delete(filepath);
                }
            }

            // Check and create folder
            string folderpath = Path.GetDirectoryName(filepath);
            if (!Directory.Exists(folderpath))
            {
                Directory.CreateDirectory(folderpath);
            }

            using (var fileStream = File.Create(filepath))
            {
                fileContent.Seek(0, SeekOrigin.Begin);
                await fileContent.CopyToAsync(fileStream);
            }
        }
    }
}
