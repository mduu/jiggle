using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Jiggle.Core.AssetManagement;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Jiggle.Server.Controllers
{
    [Produces("application/json")]
    [Route("api/AlbumCatalog")]
    public class AlbumCatalogController : Controller
    {
        private readonly IAlbumManager _albumManager;

        public AlbumCatalogController(
            IAlbumManager albumManager)
        {
            _albumManager = albumManager ?? throw new ArgumentNullException(nameof(albumManager));
        }

        // GET api/albumcatalog
        [HttpGet]
        public async Task<IEnumerable<AlbumCatalogController.Album>> Get()
        {
            var existingAlbums = await _albumManager.GetAllNewestAlbumsAsync();

            return existingAlbums.Select(a => new Album
            {
                AlbumId = a.Id,
                AlnumName = a.Name,
            });
        }

        public class Album
        {
            public Guid AlbumId { get; set; }
            public string AlnumName { get; set; }
        }
    }
}