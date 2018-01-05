using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Jiggle.Core.Common;
using Jiggle.Core.Security;

namespace Jiggle.Core.AssetManagement
{
    public class Album : EntityBase
    {
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }

        [Required]
        public Guid CreatedById { get; set; }
        public User CreatedBy { get; set; }

        public ICollection<AlbumAsset> Assets { get; set; }
        public Album ParentAlbum { get; set; }
        public ICollection<Album> ChildAlbums { get; set; }
    }
}