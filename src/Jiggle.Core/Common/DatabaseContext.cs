using System;
using Jiggle.Core.AssetManagement;
using Jiggle.Core.Security;
using Microsoft.EntityFrameworkCore;

namespace Jiggle.Core.Common
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options)
            : base(options)
        { }

        public DbSet<Asset> Assets { get; set; }
        public DbSet<Album> Albums { get; set; }
        public DbSet<AlbumAsset> AlbumAssets { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<TagAsset> TagAssets { get; set; }
        public DbSet<Face> Faces { get; set; }
        public DbSet<FaceAsset> FaceAssets { get; set; }
        public DbSet<Label> Labels { get; set; }
        public DbSet<LabelAsset> LabelAssets { get; set; }
        public DbSet<Activity> Activities { get; set; }
        public DbSet<ActivityAsset> ActivityAssets { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}