using System;
using System.Collections.Generic;

namespace Jiggle.Server.Core.DTO
{
    public class MasterdataDto
    {
        public ICollection<string> AllTags { get; set; }
        public ICollection<AlbumDto> AllAlbums { get; set; }
    }
}
