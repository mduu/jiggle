using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Jiggle.Core.Common;

namespace Jiggle.Core.Entities
{
    public class Tag : EntityBase
    {
        [Required]
        public string Name { get; set; }

        public ICollection<TagAsset> Assets { get; set; }
    }
}
