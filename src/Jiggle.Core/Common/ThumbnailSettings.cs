namespace Jiggle.Core.Common
{
    public class ThumbnailSettings
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="T:Jiggle.Core.Common.ThumbnailSettings"/> class.
        /// </summary>
        /// <param name="width">Width.</param>
        /// <param name="height">Height.</param>
        public ThumbnailSettings(int width, int height)
        {
            ThumbnailWidth = width;
            ThumbnailHeight = height;
        }

        /// <summary>
        /// Gets the width of the thumbnails.
        /// </summary>
        /// <value>The width of the thumbnails.</value>
        public int ThumbnailWidth { get; }

        /// <summary>
        /// Gets the height of the thumbnails.
        /// </summary>
        /// <value>The height of the thumbnails.</value>
        public int ThumbnailHeight { get; }
    }
}