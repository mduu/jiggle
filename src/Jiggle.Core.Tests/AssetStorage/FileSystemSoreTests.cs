using System;
using System.Threading.Tasks;
using Xunit;
using Jiggle.Core.AssetStorage;
using System.Reflection;
using System.IO;
using Jiggle.Core.Entities;

namespace Jiggle.Core.Tests.AssetStorage
{
    /// <summary>
    /// Unit-Tests for <see cref="FileSystemStore"/>.
    /// </summary>
    /// <seealso cref="FileSystemStore"/>
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
            CheckFiles(
                locationInfo,
                Path.Combine(originalRootFilepath, "2018/1/20/MyPic.jpg"),
                Path.Combine(thumbRootFilepath, "2018/1/20/MyPic.jpg"));
        }

        [Fact]
        public async Task Test_WriteThumbnailFileToStoreAsync()
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
            var locationInfo = await store.WriteThumbnailFileToStoreAsync(testAsset, testImageContent, 200, 150);

            // Assert
            CheckFiles(
                locationInfo,
                Path.Combine(thumbRootFilepath, "2018/1/20/MyPic_200_150.jpg"),
                Path.Combine(originalRootFilepath, "2018/1/20/MyPic.jpg"));
        }

        private void CheckFiles(string locationInfo, string filepathThatMustExists, string filepathThatMustNotExists)
        {
            Assert.NotEmpty(locationInfo);
            Assert.Equal(locationInfo, filepathThatMustExists);
            Assert.True(File.Exists(filepathThatMustExists)); 
            Assert.False(File.Exists(filepathThatMustNotExists));
            Assert.Equal(new FileInfo(locationInfo).Length, 2);
        }
    }
}
