using System.Collections.Generic;
using Jiggle.Core.Entities;
using System.Threading.Tasks;

namespace Jiggle.Core.AssetManagement
{
    public interface ITagManager
    {
        Task<IEnumerable<Tag>> GetAllTagsAsync();
        IEnumerable<Tag> GetTagsByName(IEnumerable<string> tagnames);
    }
}
