using System;
using Jiggle.Core.Common;
using System.Threading.Tasks;
using Jiggle.Core.Entities;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Jiggle.Core.Security
{
    /// <summary>
    /// Query that returns a user by its username or <c>Null of no user was found.</c>
    /// </summary>
    public class UserByUsernameQuery : IUserByUsernameQuery
    {
        readonly DatabaseContext context;

        /// <summary>
        /// Initializes a new instance of the <see cref="T:Jiggle.Core.Security.UserByNameQuery"/> class.
        /// </summary>
        /// <param name="context">The datbase context to use.</param>
        public UserByUsernameQuery(DatabaseContext context)
        {
            this.context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public async Task<User> Execute(string username, bool withDeleted = false)
        {
            var query = context.Users
                               .Where(u => u.Username.Equals(username, StringComparison.CurrentCultureIgnoreCase));

            if (!withDeleted)
            {
                query.Where(u => !u.Deleted);
            }

            return await query.FirstOrDefaultAsync();
        }
    }
}
