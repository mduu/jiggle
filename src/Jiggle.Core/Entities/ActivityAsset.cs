using Jiggle.Core.Common;
using System;
using System.ComponentModel.DataAnnotations;

namespace Jiggle.Core.Entities
{
    public class ActivityAsset : EntityBase
    {
        [Required]
        public Guid ActivityId { get; set; }
        public Activity Activity { get; set; }

        [Required]
        public Guid AssetId { get; set; }
        public Asset Asset { get; set; }
    }
}