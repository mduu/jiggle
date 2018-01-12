using System;
using System.IO;
using System.Threading.Tasks;
using Jiggle.Core.Entities;

namespace Jiggle.Core.AssetManagement.FileStore
{
    public interface IStoreWriter
    {
        Task<string> WriteOriginalFileToStoreAsync(Asset asset, Stream originalFileContent);

        Tuple<Stream, string> GetThumbnailStream(Asset asset, int width, int height);
    }
}
