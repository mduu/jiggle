using System.Threading.Tasks;
using Jiggle.Core.Common;
using Jiggle.Core.Entities;

namespace Jiggle.Core.Security
{
    public interface IUserByUsernameQuery : IQuery
    {
        Task<User> Execute(string username, bool withDeleted = false);
    }
}