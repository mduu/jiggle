using System;
using System.Threading.Tasks;
using Jiggle.Core.Entities;

namespace Jiggle.Core.Security
{
    /// <summary>
    /// Interface for user
    /// </summary>
    public interface IUserService
    {
        Task<User> GetCurrentUserAsync(string currentUsername);
    }
}
