using System;
using System.Threading.Tasks;
using Jiggle.Core.Entities;
using Jiggle.Core.Common;
using System.Collections.Generic;

namespace Jiggle.Core.AssetManagement
{
    /// <summary>
    /// Defines the API to manage <see cref="Album"/>'s.
    /// </summary>
    /// <seealso cref="Album"/>
    public interface IAlbumManager
    {
        /// <summary>
        /// Gets the album by identifier. Throws an exception if the album
        /// doesn't exists.
        /// </summary>
        /// <returns>The album.</returns>
        /// <param name="albumId">Album identifier (<see cref="Album.Id"/>).</param>
        Task<Album> GetAlbumByIdAsync(Guid albumId);

        /// <summary>
        /// Gets all albums by parent album identifier async.
        /// </summary>
        /// <returns>The albums by parent album identifier async.</returns>
        /// <param name="parentAlbumId">Parent albums ID or <c>Null</c> for the root albums.</param>
        Task<IEnumerable<Album>> GetAlbumsByParentAlbumIdAsync(Guid? parentAlbumId);

        /// <summary>
        /// Create a new <see cref="Album"/>.
        /// </summary>
        /// <returns>The new album.</returns>
        /// <param name="context">Context.</param>
        /// <param name="albumTitle">Album title.</param>
        /// <param name="albumDescription">Album description.</param>
        Task<Album> CreateNewAlbumAsync(string albumTitle, string albumDescription, Guid? parentAlbumId = null);

        /// <summary>
        /// Updates the album asynchronous.
        /// </summary>
        /// <param name="albumToUpdate">Album to update.</param>
        /// 
        Task UpdateAlbumAsync(Album albumToUpdate);
    }
}
