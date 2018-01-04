using System;
using Jiggle.Core.Common;

namespace Jiggle.Core.AssetManagement
{
    public class TagAsset: EntityBase
    {
        public Guid TagId { get; set; }
        public Tag Tag { get; set; }

        public Guid AssetId { get; set; }
        public Asset Asset { get; set; }
    }
}
