using System.IO;
using System.Threading.Tasks;
using Jiggle.Core.Entities;

namespace Jiggle.Core.AssetStorage
{
    public interface IStoreWriter
    {
        Task<string> WriteOriginalFileIntoStoreAsync(Asset asset, Stream originalFileContent);
    }
}
