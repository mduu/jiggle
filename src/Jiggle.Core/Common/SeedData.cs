using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;
using Jiggle.Core.AssetManagement;

namespace Jiggle.Core.Common
{
    public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new DatabaseContext(
                serviceProvider.GetRequiredService<DbContextOptions<DatabaseContext>>()))
            {
                context.Database.EnsureCreated();

                if (context.Albums.Any() || context.Assets.Any())
                {
                    return;  // DB has been seeded
                }

                context.Albums.AddRange(new Album
                {
                    Id = new Guid("29681d1e-0c75-45b7-93b4-2bb2e05095dd"),
                    Name = "Demo",
                    Description = "This is a demo album.",
                });

                context.SaveChanges();
            }
        }
    }
}
