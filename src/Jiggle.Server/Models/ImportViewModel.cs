using System;
using System.Collections.Generic;
namespace Jiggle.Server.Models
{
    public class ImportViewModel
    {
        public IReadOnlyCollection<AlbumDTO> ExistingAlbums { get; set; }
    }
}
