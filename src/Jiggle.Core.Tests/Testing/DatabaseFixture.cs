using System;
using Microsoft.Data.Sqlite;

namespace Jiggle.Core.Tests.Testing
{
    public class DatabaseFixture : IDisposable
    {
        public SqliteConnection Connection;

        public DatabaseFixture()
        {
            Connection = new SqliteConnection("DataSource=:memory:");
            Connection.Open();
        }

        public void Dispose()
        {
            Connection?.Close();
            Connection = null;
        }
    }
}
