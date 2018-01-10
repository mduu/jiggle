using System;
using System.IO;
using System.Threading.Tasks;

namespace Jiggle.Core.AssetManagement
{
    /// <summary>
    /// Interface for generating thumbnails from an original image/asset.
    /// </summary>
    public interface IThumbnailGenerator
    {
        Task GenerateAsync(byte[] originalContent, int width, int height, Stream outputStream);
    }
}
