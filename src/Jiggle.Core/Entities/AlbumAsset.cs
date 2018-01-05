using System;
using System.ComponentModel.DataAnnotations;
using Jiggle.Core.Common;

namespace Jiggle.Core.Entities
{
    public class AlbumAsset : EntityBase
    {
        [Required]
        public Guid AlbumId { get; set; }
        public Album Album { get; set; }

        [Required]
        public Guid AssetId { get; set; }
        public Asset Asset { get; set; }
    }
}
