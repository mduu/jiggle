using System;
using System.IO;
using System.Threading.Tasks;

namespace Jiggle.Core.AssetManagement.Import
{
    public interface IImportReader
    {
        Task<Stream> ReadFileContentAsync();
    }
}
