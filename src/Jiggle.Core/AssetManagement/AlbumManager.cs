using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Jiggle.Core.Common;
using Jiggle.Core.Entities;
using Microsoft.EntityFrameworkCore.Storage;

namespace Jiggle.Core.AssetManagement
{
    public class AlbumManager : IAlbumManager
    {
        private readonly DatabaseContext context;

        public AlbumManager(DatabaseContext context)
        {
            this.context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public Task<Album> CreateNewAlbumAsync(string albumTitle, string albumDescription, Guid? parentAlbumId = null)
        {
            throw new NotImplementedException();
        }

        public Task<Album> GetAlbumByIdAsync(Guid albumId)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Album>> GetAlbumsByParentAlbumIdAsync(Guid? parentAlbumId)
        {
            throw new NotImplementedException();
        }

        public Task UpdateAlbumAsync(Album albumToUpdate)
        {
            throw new NotImplementedException();
        }
    }
}
