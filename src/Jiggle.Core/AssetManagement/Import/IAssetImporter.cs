using System.Threading.Tasks;
using Jiggle.Core.Entities;

namespace Jiggle.Core.AssetManagement.Import
{
    public interface IAssetImporter
    {
        Task<Asset> ImportAssetAsync(AssetImportOptions options);
    }
}
