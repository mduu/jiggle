using System;
using Jiggle.Core.Common;

namespace Jiggle.Core.AssetManagement
{
    public class FaceAsset : EntityBase
    {
        public Guid FaceId { get; set; }
        public Face Face { get; set; }

        public Guid AssetId { get; set; }
        public Asset Asset { get; set; }
    }
}
