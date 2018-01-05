using System.ComponentModel.DataAnnotations;
using Jiggle.Core.Common;
using System.Collections.Generic;
using Jiggle.Core.AssetManagement;

namespace Jiggle.Core.Security
{
    public class User : EntityBase
    {
        [Required]
        public string Username { get; set; }

        public string Firstname { get; set; }
        public string Lastname { get; set; }

        [Required]
        public string EmailAddress { get; set; }

        // TODO Add more fields as needed eg. for authentication

        public Face Face { get; set; }
        public ICollection<Asset> ImportedAssets { get; set; }
    }
}