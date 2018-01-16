using System;
using System.IO;

namespace Jiggle.Core.AssetManagement.Import
{
    public class AssetImportOptions
    {
        public AssetImportOptions(
            Stream originalFileContent, 
            string originalFilename,
            DateTimeOffset takenTime,
            string[] tagnames = null,
            Guid? existingAlbumId = null,
            string newAlbumTitle = null,
            string newAlbumDescription = null,
            Guid? parentAlbumId = null,
            string takenBy = "")
        {
            if (string.IsNullOrWhiteSpace(originalFilename)) throw new ArgumentNullException(nameof(originalFilename));
            if (existingAlbumId != null && !string.IsNullOrWhiteSpace(newAlbumTitle)) throw new ArgumentException("You can specify an existing or a new album but not both!", nameof(existingAlbumId));

            OriginalFileContent = originalFileContent ?? throw new ArgumentNullException(nameof(originalFileContent));

            OriginalFilename = originalFilename;
            TakenTime = takenTime;
            TakenBy = takenBy;
            Tagnames = tagnames;
            ExistingAlbumId = existingAlbumId;
            NewAlbumName = newAlbumTitle;
            NewAlbumDescription = newAlbumDescription;
            ParentAlbumId = parentAlbumId;
        }

        public Stream OriginalFileContent { get; } 
        public string OriginalFilename { get; }
        public string[] Tagnames { get; }
        public Guid? ExistingAlbumId { get; }
        public string NewAlbumName { get; }
        public string NewAlbumDescription { get;  }
        public Guid? ParentAlbumId { get; }
        public DateTimeOffset TakenTime { get; set; }
        public string TakenBy { get; set; }
    }
}
