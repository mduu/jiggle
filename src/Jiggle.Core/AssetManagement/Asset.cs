using System;
using System.Collections.Generic;
using Jiggle.Core.Common;

namespace Jiggle.Core.AssetManagement
{
    public class Asset : EntityBase
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string OriginalFilename { get; set; }
        public string MimeType { get; set; }
        public DateTimeOffset TakenTime { get; set; }
        public string TakenBy { get; set; }
        public DateTimeOffset ImportTime { get; set; }
        public string ImportedBy { get; set; }
        public int Rating { get; set; }
        public string Metadata { get; set; } // TODO Maybe normalize the metadata

        public ICollection<Tag> Tags { get; set; }
        public ICollection<Album> Albums { get; set; }
        public Label Label { get; set; }
        public ICollection<Face> Faces { get; set; }
    }
}