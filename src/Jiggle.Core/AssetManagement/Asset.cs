using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Jiggle.Core.Common;
using Jiggle.Core.Security;

namespace Jiggle.Core.AssetManagement
{
    public class Asset : EntityBase
    {
        [Required]
        public string Title { get; set; }
        public string Description { get; set; }

        [Required]
        public string OriginalFileName { get; set; }
        [Required]
        public string OriginalFileMimeType { get; set; }
        [Required]
        public DateTimeOffset ImportTime { get; set; }
        public Guid ImportedById { get; set; }
        public User ImportedBy { get; set; }

        public DateTimeOffset TakenTime { get; set; }
        public string TakenBy { get; set; }
        public string GpsCoordidatesX { get; set; }
        public string GpsCoordinatesY { get; set; }

        public int Rating { get; set; }
        public string Metadata { get; set; }

        public string StorageInfoOriginal { get; set; }
        public string StorageInfoThumbnails { get; set; }

        public ICollection<TagAsset> Tags { get; set; }
        public ICollection<AlbumAsset> Albums { get; set; }
        public ICollection<FaceAsset> Faces { get; set; }
        public ICollection<LabelAsset> Labels { get; set; }
    }
}