using System;
using System.ComponentModel.DataAnnotations;
using Jiggle.Core.Common;

namespace Jiggle.Core.Entities
{
    public class FaceAsset : EntityBase
    {
        [Required]
        public Guid FaceId { get; set; }
        public Face Face { get; set; }

        [Required]
        public Guid AssetId { get; set; }
        public Asset Asset { get; set; }
    }
}
