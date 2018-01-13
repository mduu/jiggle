using System;
using Jiggle.Core.Common;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;

namespace Jiggle.Core.Tests.Testing
{
    public class DatabaseFixture: IDisposable
    {
        public DatabaseContext DatabaseContext { get; private set; }
        protected IDbContextTransaction Transaction { get; private set; } 

        public DatabaseFixture()
        {
            DatabaseContext = new DatabaseContext(new DbContextOptions<DatabaseContext>());
            Transaction = DatabaseContext.Database.BeginTransaction(System.Data.IsolationLevel.ReadUncommitted);
        }

        public void Dispose()
        {
            if (Transaction != null)
            {
                Transaction.Rollback();
                Transaction = null;
            }

            if (DatabaseContext != null)
            {
                DatabaseContext.Dispose();
                DatabaseContext = null;
            }
        }
    }
}
