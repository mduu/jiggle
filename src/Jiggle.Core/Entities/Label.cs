using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Jiggle.Core.Common;

namespace Jiggle.Core.Entities
{
    public class Label : EntityBase
    {
        [Required]
        public string Name { get; set; }
        public string Color { get; set; }

        public ICollection<LabelAsset> Assets { get; set; }
    }
}
