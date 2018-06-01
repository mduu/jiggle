using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using Jiggle.Server.Core.DTO;
using Jiggle.Core.AssetManagement;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Jiggle.Server.Controllers
{
    [Route("api/[controller]")]
    public class MasterdataController : Controller
    {
        private readonly IAlbumManager albumManager;

        /// <summary>
        /// Initializes a new instance of the <see cref="T:Jiggle.Server.Controllers.MasterdataController"/> class.
        /// </summary>
        /// <param name="albumManager">Album manager.</param>
        public MasterdataController(IAlbumManager albumManager)
        {
            this.albumManager = albumManager ?? throw new ArgumentNullException(nameof(albumManager));
        }

        // GET: api/masterdata
        [HttpGet]
        public async Task<JsonResult> Get()
        {
            var allAlbums = await albumManager.GetAllAlbums();

            return Json(new MasterdataDto {
                AllAlbums = allAlbums.Select(a => AlbumDto.FromAlbum(a)).ToArray(),
            });
        }
    }
}
