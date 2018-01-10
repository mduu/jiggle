using System;
using System.IO;
using System.Threading.Tasks;
using SixLabors.ImageSharp;

namespace Jiggle.Core.AssetManagement
{
    public class ThumbnailGenerator : IThumbnailGenerator
    {
#pragma warning disable CS1998 // Async method lacks 'await' operators and will run synchronously
        public async Task GenerateAsync(byte[] originalContent, int width, int height, Stream outputStream)

        {
            if (originalContent == null) throw new ArgumentNullException(nameof(originalContent));

            using (Image<Rgba32> image = Image.Load(originalContent))
            {
                image.Mutate(x => x
                     .Resize(width, height));

                image.SaveAsJpeg(outputStream);
            }
        }
#pragma warning restore CS1998 // Async method lacks 'await' operators and will run synchronously
    }
}
