using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Jiggle.Core.Common;

namespace Jiggle.Core.Entities
{
    public class Face : EntityBase
    {
        [Required]
        public string Shortname { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }

        public Guid UserId { get; set; }
        public User User { get; set; }

        public ICollection<FaceAsset> Assets { get; set; }
    }
}
