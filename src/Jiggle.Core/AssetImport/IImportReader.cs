using System;
using System.IO;
using System.Threading.Tasks;

namespace Jiggle.Core.AssetImport
{
    public interface IImportReader
    {
        Task<Stream> ReadFileContentAsync();
    }
}
