using System;
using Jiggle.Core.Common;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using Xunit;

namespace Jiggle.Core.Tests.Testing
{
    [Collection(DatabaseCollection.CollectionNanem)]
    public abstract class DatabaseTestsBase : IDisposable
    {
        protected DatabaseContext databaseContext { get; private set; }
        protected IDbContextTransaction transation;

        public DatabaseTestsBase(DatabaseFixture fixture)
        {
            // NOTE: We need a fresh DB context with a frsh state for every test but we like
            // to re-use the DB connection for all DB tests.
            var options = new DbContextOptionsBuilder<DatabaseContext>()
               .UseSqlite(fixture.Connection)
               .Options;
            databaseContext = new DatabaseContext(options);
            databaseContext.Database.EnsureCreated();

            transation = this.databaseContext.Database.BeginTransaction();
        }

        public void Dispose()
        {
            transation?.Rollback();
            transation?.Dispose();
            transation = null;

            databaseContext?.Dispose();
            databaseContext = null;
        }
    }
}
