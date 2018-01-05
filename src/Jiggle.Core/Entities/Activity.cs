using System;
using Jiggle.Core.Common;
using System.Collections.Generic;

namespace Jiggle.Core.Entities
{
    public class Activity : EntityBase
    {
        public DateTimeOffset TimeStamp { get; set; }
        public string Caption { get; set; }
        public string Description { get; set; }

        public Guid UserId { get; set; }
        public User User { get; set; }

        public Guid RelatedAlbumId { get; set; }
        public Album RelatedAlbun { get; set; }

        public ICollection<ActivityAsset> RelatedAssets { get; set; }

    }
}
