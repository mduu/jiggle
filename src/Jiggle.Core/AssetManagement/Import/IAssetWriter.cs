using System;
using System.Threading.Tasks;
using Jiggle.Core.Entities;

namespace Jiggle.Core.AssetManagement.Import
{
    public interface IAssetWriter
    {
        Task WriteAsset(Asset asset);
    }
}
