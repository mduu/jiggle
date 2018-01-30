using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Jiggle.Server.Controllers
{
    public class ImportController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}