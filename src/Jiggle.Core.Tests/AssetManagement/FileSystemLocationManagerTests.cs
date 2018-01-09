using System;
using Xunit;
using Jiggle.Core.Entities;
using Jiggle.Core.AssetManagement.Storage;

namespace Jiggle.Core.Tests.AssetManagement
{
    public class FileSystemLocationManagerTests
    {
        [Fact]
        public void Test_GetPathForOriginal_Without_Asset()
        {
            // Arrange
            var locationManager = CreateFileSystemLocationManager() as IFileSystemLocationManager;

            // Act
            var exception = Assert.Throws<ArgumentNullException>(() => locationManager.GetPathForOriginal(null));

            // Assert
            Assert.Equal("asset", exception.ParamName);
        }

        [Fact]
        public void Test_GetPathForThumbnail_Without_Asset()
        {
            // Arrange
            var locationManager = CreateFileSystemLocationManager() as IFileSystemLocationManager;

            // Act
            var exception = Assert.Throws<ArgumentNullException>(() => locationManager.GetPathForThumbnail(null, 0, 0));

            // Assert
            Assert.Equal("asset", exception.ParamName);
        }

        [Fact]
        public void Test_GetPathForOriginal_WIth_Asset()
        {
            // Arrange
            var locationManager = CreateFileSystemLocationManager() as IFileSystemLocationManager;
            var asset = CreateAsset(2018, 1, 20, "MyPic.jpg");

            // Act
            var path = locationManager.GetPathForOriginal(asset);

            // Assert
            Assert.Equal("/myOrigRoot/2018/1/20/MyPic.jpg", path);
        }

        [Fact]
        public void Test_GetPathForThumbnail_WIth_Asset()
        {
            // Arrange
            var locationManager = CreateFileSystemLocationManager() as IFileSystemLocationManager;
            var asset = CreateAsset(2018, 1, 20, "MyPic.jpg");

            // Act
            var path = locationManager.GetPathForThumbnail(asset, 200, 150);

            // Assert
            Assert.Equal("/myThumbsRoot/2018/1/20/MyPic_200_150.jpg", path);
        }

        private Asset CreateAsset(int takenYear, int takenMonth, int takenDay, string originalFilename) => new Asset
        {
            TakenTime = new DateTimeOffset(takenYear, takenMonth, takenDay, 0, 0, 0, TimeSpan.Zero),
            OriginalFileName = originalFilename,
        };

        private static FileSystemLocationManager CreateFileSystemLocationManager()
        {
            var configuration = new FileSystemConfiguration("/myOrigRoot", "/myThumbsRoot");

            return new FileSystemLocationManager(configuration);
        }
    }
}
