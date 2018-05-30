using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Jiggle.Core.Entities;
using System.Linq;

namespace Jiggle.Server.Core.DTO
{
    public class AlbumDto
    {
        public Guid Id { get; set; }

        [Required]
        public string Name { get; set; }
        public string Description { get; set; }

        [Required]
        public string CreatedBy { get; set; }
        public string CreatedByFullname { get; set; }

        [Required]
        public DateTimeOffset CreatedAt { get; set; }

        [Required]
        public string UpdatedBy { get; set; }
        public string UpdatedByFullname { get; set; }

        [Required]
        public DateTimeOffset UpdatedAt { get; set; }

        public Guid? ParentAlbumId { get; set; }
        public ICollection<Guid> ChildAlbums { get; set; }

        public static AlbumDto FromAlbum(Album album) => new AlbumDto
        {
            Id = album.Id,
            Name = album.Name,
            Description = album.Description,
            CreatedBy = album.CreatedBy.Username,
            CreatedByFullname = album.CreatedBy.Fullname,
            CreatedAt = album.CreatedAt,
            UpdatedBy = album.UpdatedBy.Username,
            UpdatedByFullname = album.UpdatedBy.Fullname,
            UpdatedAt = album.UpdatedAt,
            ParentAlbumId = album.ParentAlbumId,
            ChildAlbums = album.ChildAlbums.Select(c => c.Id).ToArray(),
        };
    }
}
