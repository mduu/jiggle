using System;
using Microsoft.EntityFrameworkCore.Storage;

namespace Jiggle.Core.Tests.Testing
{
    public abstract class DatabaseTestsBase: IDisposable
    {
        protected readonly DatabaseFixture fixture;
        protected readonly IDbContextTransaction transation;

        public DatabaseTestsBase(DatabaseFixture fixture)
        {
            this.fixture = fixture ?? throw new ArgumentNullException(nameof(fixture));

            transation = fixture.DatabaseContext.Database.BeginTransaction();
        }

        public void Dispose()
        {
            transation?.Rollback();
        }

    }
}
