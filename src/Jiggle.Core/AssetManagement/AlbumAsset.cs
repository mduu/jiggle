using System;
using Jiggle.Core.Common;

namespace Jiggle.Core.AssetManagement
{
    public class AlbumAsset : EntityBase
    {
        public Guid AlbumId { get; set; }
        public Album Album { get; set; }

        public Guid AssetId { get; set; }
        public Asset Asset { get; set; }
    }
}
