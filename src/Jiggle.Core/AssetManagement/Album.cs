using System;
using System.Collections.Generic;
using Jiggle.Core.Common;

namespace Jiggle.Core.AssetManagement
{
    public class Album : EntityBase
    {
        public string Name { get; set; }
        public string Description { get; set; }

        public virtual ICollection<Asset> Assets { get; set; }
        public virtual Album ParentAlbum { get; set; }
        public virtual ICollection<Album> ChildAlbums { get; set; }
    }

}
