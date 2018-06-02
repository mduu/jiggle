using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using Jiggle.Server.Core.DTO;
using Jiggle.Core.AssetManagement;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Jiggle.Server.Controllers
{
    [Route("api/v1/[controller]")]
    public class MasterdataController : Controller
    {
        private readonly IAlbumManager albumManager;
        private readonly ITagManager tagManager;

        /// <summary>
        /// Initializes a new instance of the <see cref="T:Jiggle.Server.Controllers.MasterdataController"/> class.
        /// </summary>
        /// <param name="albumManager">Album manager.</param>
        public MasterdataController(IAlbumManager albumManager, ITagManager tagManager)
        {
            this.albumManager = albumManager ?? throw new ArgumentNullException(nameof(albumManager));
            this.tagManager = tagManager ?? throw new ArgumentNullException(nameof(tagManager));
        }

        // GET: api/masterdata
        [HttpGet]
        public async Task<JsonResult> Get()
        {
            var allTags = await tagManager.GetAllTagsAsync();
            var allAlbums = await albumManager.GetAllAlbumsAsync();

            return Json(new MasterdataDto {
                AllTags = allTags.Select(t => t.Name).ToArray(),
                AllAlbums = allAlbums.Select(a => AlbumDto.FromAlbum(a)).ToArray(),
            });
        }
    }
}
