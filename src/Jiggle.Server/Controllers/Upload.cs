using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Jiggle.Core.Entities;
using Microsoft.AspNetCore.Mvc;
using Jiggle.Core.AssetManagement;
using Jiggle.Core.AssetManagement.Import;

namespace Jiggle.Server.Controllers
{
    public class Upload : Controller
    {
        private readonly IAlbumManager albumManager;
        private readonly IAssetImporter assetImporter;

        public Upload(
            IAlbumManager albumManager,
            IAssetImporter assetImporter)
        {
            this.albumManager = albumManager ?? throw new ArgumentNullException(nameof(albumManager));
            this.assetImporter = assetImporter ?? throw new ArgumentNullException(nameof(assetImporter));
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> InitalData()
        {
            var albums = 
                (await albumManager.GetAllNewestAlbumsAsync())
                .Select(a => new AlbumDTO(a));

            return Json(new
            {
                existingAlbums = albums,
            });
        }

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
}
