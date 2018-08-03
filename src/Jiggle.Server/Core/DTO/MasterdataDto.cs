using System;
using System.Collections.Generic;

namespace Jiggle.Server.Core.DTO
{
    public class MasterdataDto
    {
        public ICollection<string> allTags { get; set; }
        public ICollection<AlbumDto> allAlbums { get; set; }
    }
}
