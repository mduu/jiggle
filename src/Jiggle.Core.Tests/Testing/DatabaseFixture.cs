using System;
using Jiggle.Core.Common;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;

namespace Jiggle.Core.Tests.Testing
{
    public class DatabaseFixture: IDisposable
    {
        public DatabaseContext DatabaseContext { get; private set; }

        public DatabaseFixture()
        {
            var connection = new SqliteConnection("DataSource=:memory:");
            connection.Open();
            var options = new DbContextOptionsBuilder<DatabaseContext>()
                .UseSqlite(connection)
                .Options;
            DatabaseContext = new DatabaseContext(options);
        }

        public void Dispose()
        {
            if (DatabaseContext != null)
            {
                DatabaseContext.Dispose();
                DatabaseContext = null;
            }
        }
    }
}
