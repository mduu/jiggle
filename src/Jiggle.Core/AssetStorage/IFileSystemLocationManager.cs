using System;
using Jiggle.Core.Entities;

namespace Jiggle.Core.AssetStorage
{
    /// <summary>
    /// Manage locations on the file system by calculating file system paths.
    /// </summary>
    public interface IFileSystemLocationManager
    {
        /// <summary>
        /// Gets the path for original asset file.
        /// </summary>
        /// <returns>The file system path for original asset file.</returns>
        /// <param name="asset">The <see cref="Asset"/> to get the path for.</param>
        string GetPathForOriginal(Asset asset);

        /// <summary>
        /// Gets the path for thumbnail image for the fiven <paramref name="asset"/>
        /// and the <paramref name="width"/> and <paramref name="height"/> of the
        /// thumbnail.
        /// </summary>
        /// <returns>The file system path for thumbnail.</returns>
        /// <param name="asset">Asset.</param>
        /// <param name="width">Width.</param>
        /// <param name="height">Height.</param>
        string GetPathForThumbnail(Asset asset, int width, int height);
    }
}
