using System.IO;
using System.Threading.Tasks;
using Jiggle.Core.Entities;

namespace Jiggle.Core.AssetManagement.FileStore
{
    public interface IStoreWriter
    {
        Task<string> WriteOriginalFileToStoreAsync(Asset asset, Stream originalFileContent);
        Task<string> WriteThumbnailFileToStoreAsync(Asset asset, Stream thumbnailFileContent, int width, int height);
    }
}
