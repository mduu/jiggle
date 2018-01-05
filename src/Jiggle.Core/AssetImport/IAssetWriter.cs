using System;
using System.Threading.Tasks;
using Jiggle.Core.Entities;
namespace Jiggle.Core.AssetImport
{
    public interface IAssetWriter
    {
        Task WriteAsset(Asset);
    }
}
