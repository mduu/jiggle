using System;
using System.Collections.Generic;
using Jiggle.Core.Entities;
using Jiggle.Core.Common;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Jiggle.Core.AssetManagement
{
    public class TagManager : ITagManager
    {
        readonly DatabaseContext context;

        public TagManager(DatabaseContext context)
        {
            this.context = context ?? throw new ArgumentNullException(nameof(context));
        }

        /// <inheritdoc/>
        public async Task<IEnumerable<Tag>> GetAllTagsAsync()
        {
            return await context.Tags.ToListAsync();
        }

        /// <inheritdoc/>
        public IEnumerable<Tag> GetTagsByName(IEnumerable<string> tagnames)
        {
            if (tagnames == null) throw new ArgumentNullException(nameof(tagnames));

            foreach (var tagname in tagnames)
            {
                var tag = context.Tags.FirstOrDefault(t => t.Name.Equals(tagname, StringComparison.CurrentCultureIgnoreCase));
                if (tag == null)
                {
                    tag = new Tag
                    {
                        Id = Guid.NewGuid(),
                        Name = tagname.ToLower(),
                    };

                    context.Tags.Add(tag);
                }

                yield return tag;
            }
        }
    }
}
