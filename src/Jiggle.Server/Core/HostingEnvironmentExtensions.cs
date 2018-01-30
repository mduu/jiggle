using System;
using Microsoft.AspNetCore.Hosting;

namespace Jiggle.Server.Core
{
    public static class HostingEnvironmentExtensions
    {
        public static string MapPath(
            this IHostingEnvironment environment, 
            string pathToMap)
        {
            if (environment == null) throw new ArgumentNullException(nameof(environment));

            if (string.IsNullOrWhiteSpace(pathToMap))
            {
                return "";
            }

            return pathToMap
                .Replace("~~", environment.ContentRootPath)
                .Replace("~", environment.WebRootPath);
        }
    }
}
