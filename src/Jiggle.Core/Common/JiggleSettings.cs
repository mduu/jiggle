namespace Jiggle.Core.Common
{
    public class JiggleSettings : IThumbnailSettings
    {
        /// <inheritdoc/>
        public int ThumbnailWidth { get; set; } = 200;

        /// <inheritdoc/>
        public int ThumbnailHeight { get; set; } = 200;
    }
}
