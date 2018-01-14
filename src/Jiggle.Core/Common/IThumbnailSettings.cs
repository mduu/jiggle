namespace Jiggle.Core.Common
{
    public interface IThumbnailSettings
    {
        /// <summary>
        /// Gets the width of the thumbnails.
        /// </summary>
        /// <value>The width of the thumbnails.</value>
        int ThumbnailWidth { get; }

        /// <summary>
        /// Gets the height of the thumbnails.
        /// </summary>
        /// <value>The height of the thumbnails.</value>
        int ThumbnailHeight { get; }
    }
}