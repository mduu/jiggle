using System;
using System.IO;
namespace Jiggle.Core.AssetImport
{
    public class AssetImportOptions
    {
        public AssetImportOptions(
            Stream originalFileContent, 
            string username,
            string[] tagnames = null,
            Guid? existingAlbumId = null,
            string newAlbumTitle = null,
            string newAlbumDescription = null)
        {
            if (existingAlbumId != null && !string.IsNullOrWhiteSpace(newAlbumTitle)) throw new ArgumentException("You can specify an existing or a new album but not both!", nameof(existingAlbumId));

            OriginalFileContent = originalFileContent ?? throw new ArgumentNullException(nameof(originalFileContent));
            Username = !string.IsNullOrWhiteSpace(username) ? username : throw new ArgumentNullException(nameof(username));
            Tagnames = tagnames;
            ExistingAlbumId = existingAlbumId;
            NewAlbumTitle = newAlbumTitle;
            NewAlbumDescription = newAlbumDescription;
        }

        public Stream OriginalFileContent { get; } 
        public string Username { get; }
        public string[] Tagnames { get; }
        public Guid? ExistingAlbumId { get; }
        public string NewAlbumTitle { get; }
        public string NewAlbumDescription { get;  }
    }
}
