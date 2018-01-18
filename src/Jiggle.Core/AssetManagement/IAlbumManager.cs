using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Jiggle.Core.Entities;

namespace Jiggle.Core.AssetManagement
{
    /// <summary>
    /// Defines the API to manage <see cref="Album"/>'s.
    /// </summary>
    /// <seealso cref="Album"/>
    public interface IAlbumManager
    {
        /// <summary>
        /// Gets all newest albums async.
        /// </summary>
        /// <returns>All newest albums.</returns>
        Task<IEnumerable<Album>> GetAllNewestAlbumsAsync();

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
        /// <param name="albumDescription">The mandatory albumname.</param>
        /// <param name="albumDescription">An optional description.</param>
        /// <param name="currentUserId">ID of the current user.</param>
        /// <param name="parentAlbumId">Optional ID of the parent album.</param>
        Album CreateNewAlbum(string albumName, string albumDescription, Guid currentUserId, Guid? parentAlbumId = null);
    }
}
