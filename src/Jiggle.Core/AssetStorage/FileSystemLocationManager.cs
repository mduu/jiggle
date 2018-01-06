using System;

namespace Jiggle.Core.AssetStorage
{
    public class FileSystemLocationManager : IFileSystemLocationManager
    {
        readonly FileSystemConfiguration configuration;

        public FileSystemLocationManager(FileSystemConfiguration configuration)
        {
            configuration = configuration ?? throw new ArgumentNullException(nameof(configuration));
        }
    }
}