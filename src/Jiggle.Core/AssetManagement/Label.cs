using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Jiggle.Core.Common;

namespace Jiggle.Core.AssetManagement
{
    public class Label : EntityBase
    {
        [Required]
        public string Name { get; set; }
        public string Color { get; set; }

        public ICollection<Asset> Assets { get; set; }
    }
}
