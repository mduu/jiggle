using System;
using System.Collections.Generic;
using Jiggle.Core.Common;

namespace Jiggle.Core.AssetManagement
{
    public class Face : EntityBase
    {
        public string Firstname { get; set; }
        public string Lastname { get; set; }

        public ICollection<Asset> Assets { get; set; }
    }
}
