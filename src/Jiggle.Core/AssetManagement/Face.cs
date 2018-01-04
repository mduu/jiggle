using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Jiggle.Core.Common;

namespace Jiggle.Core.AssetManagement
{
    public class Face : EntityBase
    {
        [Required]
        public string Shortname { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }

        public ICollection<FaceAsset> FaceAssets { get; set; }
    }
}
