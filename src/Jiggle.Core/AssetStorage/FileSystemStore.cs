using System;
using System.IO;
using System.Threading.Tasks;
using Jiggle.Core.Entities;

namespace Jiggle.Core.AssetStorage
{
    public class FileSystemStore : IStoreWriter
    {
        readonly IFileSystemLocationManager locationManager;

        public FileSystemStore(IFileSystemLocationManager locationManager)
        {
            this.locationManager = locationManager;
        }

        /// <inheritdoc/>
        public async Task<string> WriteOriginalFileIntoStoreAsync(Asset asset, Stream originalFileContent)
        {
            if (asset == null) throw new ArgumentNullException(nameof(asset));
            if (originalFileContent == null) throw new ArgumentNullException(nameof(originalFileContent));

            throw new NotImplementedException();
        }
    }
}
