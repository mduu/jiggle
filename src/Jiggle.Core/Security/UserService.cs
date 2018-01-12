using System;
using System.Threading.Tasks;
using Jiggle.Core.Entities;
using Jiggle.Core.Common;

namespace Jiggle.Core.Security
{
    /// <summary>
    /// User service.
    /// </summary>
    public class UserService : IUserService
    {
        readonly DatabaseContext databaseContext;
        readonly IUserByUsernameQuery userByUsernameQuery;

        public UserService(
            DatabaseContext databaseContext,
            IUserByUsernameQuery userByUsernameQuery)
        {
            this.databaseContext = databaseContext ?? throw new ArgumentNullException(nameof(databaseContext));
            this.userByUsernameQuery = userByUsernameQuery ?? throw new ArgumentNullException(nameof(userByUsernameQuery));
        }

        /// <inheritdoc/>
        public async Task<User> GetCurrentUserAsync(string currentUsername)
        {
            return await userByUsernameQuery.Execute(currentUsername);
        }
    }
}
