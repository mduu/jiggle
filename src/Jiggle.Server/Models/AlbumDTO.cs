using System;
using Jiggle.Core.Entities;

namespace Jiggle.Server.Models
{
    public class AlbumDTO
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public int Level { get; set; }

        public AlbumDTO()
        {
        }

        public AlbumDTO(Album album)
        {
            if (album == null) throw new ArgumentNullException(nameof(album));

            Id = album.Id.ToString("D");
            Name = album.Name;
            Level = 0; // TODO
        }
    }
}
