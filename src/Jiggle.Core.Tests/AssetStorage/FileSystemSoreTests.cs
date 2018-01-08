using System;
using System.Threading.Tasks;
using Xunit;
using Jiggle.Core.AssetStorage;
using System.Reflection;
using System.IO;
using Jiggle.Core.Entities;

namespace Jiggle.Core.Tests.AssetStorage
{
    public class FileSystemSoreTests : IDisposable
    {
        private string testRootPath;
        private string originalRootFilepath;
        private string thumbRootFilepath;
        private FileSystemConfiguration configuration;
        private FileSystemLocationManager locationManager;
        private FileSystemStore store;

        public FileSystemSoreTests()
        {
            testRootPath = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "fsStoreTestsRoot");
            originalRootFilepath = Path.Combine(testRootPath, "originals");
            thumbRootFilepath = Path.Combine(testRootPath, "thumbnails");
            configuration = new FileSystemConfiguration(originalRootFilepath, thumbRootFilepath);
            locationManager = new FileSystemLocationManager(configuration);
            store = new FileSystemStore(locationManager);
        }

        public void Dispose()
        {
            FileSystemHelper.DeleteDirectoryTree(testRootPath);
        }

        [Fact]
        public async Task Test_WriteOriginalFileToStoreAsync()
        {
            // Arrange
            var testAsset = new Asset
            {
                OriginalFileName = "MyPic.jpg",
                OriginalFileMimeType = "image/jpg",
                TakenTime = new DateTimeOffset(2018, 1, 20, 18, 0, 0, new TimeSpan(0)),
            };
            var testImageContent = new MemoryStream(new byte[2] { 0x12, 0x13 });

            // Act
            var locationInfo = await store.WriteOriginalFileToStoreAsync(testAsset, testImageContent);

            // Assert
            Assert.NotEmpty(locationInfo);
            Assert.True(File.Exists(Path.Combine(originalRootFilepath, "2018/1/20/MyPic.jpg")));            Assert.True(File.Exists(Path.Combine(originalRootFilepath, "2018/1/20/MyPic.jpg")));
            Assert.False(File.Exists(Path.Combine(thumbRootFilepath, "2018/1/20/MyPic.jpg")));
            var fi = new FileInfo(locationInfo);
            Assert.Equal(fi.Length, 2);
        }
    }
}
