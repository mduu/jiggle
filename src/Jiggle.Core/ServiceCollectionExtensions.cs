using System;
using Jiggle.Core.AssetManagement;
using Jiggle.Core.AssetManagement.FileStore;
using Jiggle.Core.AssetManagement.Import;
using Jiggle.Core.Common;
using Jiggle.Core.Security;
using Microsoft.Extensions.DependencyInjection;

namespace Jiggle.Core
{
    /// <summary>
    /// Service collection extensions.
    /// </summary>
    public static class ServiceCollectionExtensions
    {
        /// <summary>
        /// Registers Jiggle's core services.
        /// </summary>
        /// <param name="services">Services collection to register the services into.</param>
        /// <param name="thumbnailSettings">Thumbnail settings instance to register.</param>
        /// <param name="fileSystemConfiguration">File system configuration to register.</param>
        public static void AddJiggleCore(
            this IServiceCollection services,
            ThumbnailSettings thumbnailSettings,
            FileSystemConfiguration fileSystemConfiguration)
        {
            if (services == null) throw new ArgumentNullException(nameof(services));
            if (thumbnailSettings == null) throw new ArgumentNullException(nameof(thumbnailSettings));
            if (fileSystemConfiguration == null) throw new ArgumentNullException(nameof(fileSystemConfiguration));

            AddJiggleAssetManagement(services, thumbnailSettings, fileSystemConfiguration);
            AddJiggleSecurity(services);
        }

        private static void AddJiggleAssetManagement(
            IServiceCollection services, 
            ThumbnailSettings thumbnailSettings, 
            FileSystemConfiguration fileSystemConfiguration)
        {
            if (services == null) throw new ArgumentNullException(nameof(services));
            if (thumbnailSettings == null) throw new ArgumentNullException(nameof(thumbnailSettings));
            if (fileSystemConfiguration == null) throw new ArgumentNullException(nameof(fileSystemConfiguration));

            services.AddSingleton(thumbnailSettings);
            services.AddSingleton(fileSystemConfiguration);

            services.AddTransient<IFileSystemLocationManager, FileSystemLocationManager>();
            services.AddTransient<IStoreWriter, FileSystemStore>();
            services.AddTransient<IAssetImporter, AssetImporter>();
            services.AddTransient<IAlbumManager, AlbumManager>();
            services.AddTransient<ITagManager, TagManager>();
            services.AddTransient<IThumbnailGenerator, ThumbnailGenerator>();
        }

        private static void AddJiggleSecurity(IServiceCollection services)
        {
            if (services == null) throw new ArgumentNullException(nameof(services));

            services.AddTransient<IUserByUsernameQuery, UserByUsernameQuery>();
            services.AddTransient<IUserService, UserService>();
        }
    }
}
