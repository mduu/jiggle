using System;
using System.ComponentModel.DataAnnotations;
using Jiggle.Core.Common;

namespace Jiggle.Core.Entities
{
    public class LabelAsset: EntityBase
    {
        [Required]
        public Guid LabelId { get; set; }
        public Label Label { get; set; }

        [Required]
        public Guid AssetId { get; set; }
        public Asset Asset { get; set; }
    }
}
