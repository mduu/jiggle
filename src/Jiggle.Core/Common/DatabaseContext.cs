using System;
using Jiggle.Core.AssetManagement;
using Microsoft.EntityFrameworkCore;

namespace Jiggle.Core.Common
{
    public class DatabaseContext : DbContext
    {
        public DbSet<Album> Albums { get; set; }
        public DbSet<Asset> Assets { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<Label> Labels { get; set; }
        public DbSet<Face> Faces { get; set; }
    }
}