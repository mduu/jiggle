using System;

namespace Jiggle.Core.AssetManagement.FileStore
{
    /// <summary>
    /// Configuration for the <see cref="FileSystemStore"/>.
    /// </summary>
    /// <seealso cref="FileSystemStore"/>
    public class FileSystemConfiguration
    {
        public FileSystemConfiguration(string originalRootFilepath, string thumbRootFilepath)
        {
            if (string.IsNullOrWhiteSpace(originalRootFilepath)) throw new ArgumentNullException(nameof(originalRootFilepath));
            if (string.IsNullOrWhiteSpace(thumbRootFilepath)) throw new ArgumentNullException(nameof(thumbRootFilepath));

            OriginalRootFilepath = originalRootFilepath;
            ThumbRootFilepath = thumbRootFilepath;
        }

        /// <summary>
        /// Gets the root filepath where the original files are stored.
        /// </summary>
        /// <value>The root filepath to store originals.</value>
        public string OriginalRootFilepath { get; }

        /// <summary>
        /// Gets the root filepath where the thumbnails are stored.
        /// </summary>
        /// <value>The root filepath to store the thumbnails.</value>
        public string ThumbRootFilepath { get; }
    }
}
