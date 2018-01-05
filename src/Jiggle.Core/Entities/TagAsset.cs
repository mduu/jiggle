using System;
using System.ComponentModel.DataAnnotations;
using Jiggle.Core.Common;

namespace Jiggle.Core.Entities
{
    public class TagAsset: EntityBase
    {
        [Required]
        public Guid TagId { get; set; }
        public Tag Tag { get; set; }

        [Required]
        public Guid AssetId { get; set; }
        public Asset Asset { get; set; }
    }
}
