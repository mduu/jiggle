using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Jiggle.Core.Common;

namespace Jiggle.Core.AssetManagement
{
    public class Asset : EntityBase
    {
        [Required]
        public string Title { get; set; }
        public string Description { get; set; }
        [Required]
        public string OriginalFilename { get; set; }
        [Required]
        public string MimeType { get; set; }
        public DateTimeOffset TakenTime { get; set; }
        public string TakenBy { get; set; }
        [Required]
        public DateTimeOffset ImportTime { get; set; }
        public string ImportedBy { get; set; }
        public int Rating { get; set; }
        public string Metadata { get; set; }

        public Guid LabelId { get; set; }
        public Label Label { get; set; }

        public ICollection<TagAsset> TagAssets { get; set; }
        public ICollection<AlbumAsset> AlbumAssets { get; set; }
        public ICollection<FaceAsset> FaceAssets { get; set; }
    }
}