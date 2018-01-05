using System;
using System.ComponentModel.DataAnnotations;

namespace Jiggle.Core.Entities
{
    public class LabelAsset
    {
        [Required]
        public Guid LabelId { get; set; }
        public Label Label { get; set; }

        [Required]
        public Guid AssetId { get; set; }
        public Asset Asset { get; set; }
    }
}
