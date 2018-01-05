using System;
using System.Threading.Tasks;

namespace Jiggle.Core.AssetImport
{
    public interface IThumbnailGenerator
    {
        Task<byte[]> GenerateAsync(byte[] originalContent, int with, int height);
    }
}
