using System;
using System.Threading.Tasks;

namespace Jiggle.Core.AssetManagement
{
    public interface IThumbnailGenerator
    {
        Task<byte[]> GenerateAsync(byte[] originalContent, int with, int height);
    }
}
