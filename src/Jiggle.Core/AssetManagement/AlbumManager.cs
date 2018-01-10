using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Jiggle.Core.Common;
using Jiggle.Core.Entities;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace Jiggle.Core.AssetManagement
{
    public class AlbumManager : IAlbumManager
    {
        private readonly DatabaseContext context;

        /// <summary>
        /// Initializes a new instance of the <see cref="T:Jiggle.Core.AssetManagement.AlbumManager"/> class.
        /// </summary>
        /// <param name="context">Database context to use.</param>
        public AlbumManager(DatabaseContext context)
        {
            this.context = context ?? throw new ArgumentNullException(nameof(context));
        }

        /// <inheritdoc/>
        public async Task<Album> GetAlbumByIdAsync(Guid albumId)
        {
            return await context.Albums
                                .Include(a => a.CreatedBy)
                                .Include(a => a.ChildAlbums)
                                .FirstAsync(a => a.Id == albumId);
        }

        /// <inheritdoc/>
        public async Task<IEnumerable<Album>> GetAlbumsByParentAlbumIdAsync(Guid? parentAlbumId)
        {
            return await context.Albums
                                .Include(a => a.CreatedBy)
                                .Where(a => a.ParentAlbumId == parentAlbumId)
                                .ToListAsync();
        }

        /// <inheritdoc/>
        public Album CreateNewAlbum(string albumName, string albumDescription, Guid currentUserId, Guid? parentAlbumId = null)
        {
            if (string.IsNullOrWhiteSpace(albumDescription)) throw new ArgumentNullException(nameof(albumDescription));

            var newAlbum = new Album
            {
                Id = Guid.NewGuid(),
                Name = albumDescription,
                Description = albumDescription,
                CreatedById = currentUserId,
                ParentAlbumId = parentAlbumId,
            };

            context.Albums.Add(newAlbum);

            return newAlbum;
        }
    }
}
