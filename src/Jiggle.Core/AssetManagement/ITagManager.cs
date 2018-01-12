using System.Collections.Generic;
using Jiggle.Core.Entities;

namespace Jiggle.Core.AssetManagement
{
    public interface ITagManager
    {
        IEnumerable<Tag> GetTagsByName(IEnumerable<string> tagnames);
    }
}
