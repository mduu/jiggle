using System;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Jiggle.Core.AssetManagement;
using Jiggle.Core.AssetManagement.FileStore;
using Jiggle.Core.AssetManagement.Import;
using Jiggle.Core.Common;
using Jiggle.Core.Entities;
using Jiggle.Core.Security;
using Jiggle.Core.Tests.Testing;
using Xunit;

namespace Jiggle.Core.Tests.AssetManagement.Import
{
    [Collection(DatabaseCollection.CollectionNanem)]
    public class AssetImporterTests : DatabaseTestsBase, IDisposable
    {
        private const string TestUsername = "joe.doe";
        private const string TestUsermailaddress = "joe.doe@test.com";

        private ThumbnailSettings thumbnailSettings = new ThumbnailSettings(200, 200);
        private IStoreWriter storeWriter;
        private IAlbumManager albumManager;
        private ITagManager tagManager;
        private IUserService userService;
        private IThumbnailGenerator thumbnailGenerator;
        private IAssetImporter assetImporter;
        private FileSystemConfiguration fileSystemConfig;
        private IFileSystemLocationManager locationManager;
        private string asmPath;
        private string testPicPath;
        private string originalRootFilepath;
        private string testRootPath;
        private string thumbRootFilepath;

        public AssetImporterTests(DatabaseFixture fixture)
            : base(fixture)
        {
            SetUpBasicTestScenario();
            FileSystemHelper.DeleteDirectoryTree(testRootPath);
        }

        public new void Dispose()
        {
            FileSystemHelper.DeleteDirectoryTree(testRootPath);

            base.Dispose();
        }

        [Fact]
        public async Task ImportWithNullOptions()
        {
            // Arrage

            // Act
            var exception = await Assert.ThrowsAsync<ArgumentNullException>(()
                => assetImporter.ImportAssetAsync("marc", null));

            // Assert
            Assert.Equal("importOptions", exception.ParamName);
        }

        [Fact]
        public async Task Import_Into_New_Album()
        {
            // Arrange
            using (var originalContentStream = GetFileStreamForTestImage("racoon.jpg"))
            {
                var importOptions = new AssetImportOptions(
                    originalContentStream,
                    "racoon.jpg",
                    new DateTimeOffset(new DateTime(2018, 1, 13)),
                    new string[] { "tag1", "tag2" },
                    newAlbumTitle: "My new album",
                    newAlbumDescription: "My new album description",
                    takenBy: "Jane Doe");

                // Act
                var asset = await assetImporter.ImportAssetAsync(TestUsername, importOptions);
                databaseContext.SaveChanges();

                // Assert
                Assert.NotNull(asset);

                var origPicPath = Path.Combine(new string[] { originalRootFilepath, "2018", "1", "13", "racoon.jpg" });
                Assert.True(File.Exists(origPicPath));

                var thumbPicPath = Path.Combine(new string[] { thumbRootFilepath, "2018", "1", "13", "racoon_200_200.jpg" });
                Assert.True(File.Exists(thumbPicPath));

                Assert.Equal(1, databaseContext.Assets.Count());
                Assert.Equal(1, databaseContext.Albums.Count());
                Assert.Equal(2, databaseContext.Tags.Count());

                var dbAsset = databaseContext.Assets.First();
                Assert.Equal("Jane Doe", asset.TakenBy);
                Assert.NotEmpty(asset.StorageInfoOriginal);
                Assert.NotEmpty(asset.StorageInfoThumbnails);
                Assert.Equal("image/jpeg", asset.OriginalFileMimeType);
            }
        }

        private Stream GetFileStreamForTestImage(string filename)
        {
            var filepath = Path.Combine(testPicPath, filename);

            return File.OpenRead(filepath);
        }

        private void SetUpBasicTestScenario()
        {
            LoadTestdata();
            SetUpFileSystemAccess();

            albumManager = new AlbumManager(databaseContext) as IAlbumManager;
            tagManager = new TagManager(databaseContext) as ITagManager;
            var userByUsernameQuery = new UserByUsernameQuery(databaseContext) as IUserByUsernameQuery;
            userService = new UserService(databaseContext, userByUsernameQuery);
            thumbnailGenerator = new ThumbnailGenerator() as IThumbnailGenerator;
            assetImporter = new AssetImporter(
                thumbnailSettings,
                databaseContext,
                storeWriter,
                albumManager,
                tagManager,
                userService,
                thumbnailGenerator
            );
        }

        private void LoadTestdata()
        {
            databaseContext.Users.Add(new User
            {
                Id = Guid.NewGuid(),
                Username = TestUsername,
                EmailAddress = TestUsermailaddress,
            });
            databaseContext.SaveChanges();
        }

        private void SetUpFileSystemAccess()
        {
            asmPath = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
            testPicPath = Path.GetFullPath(Path.Combine(asmPath, "../../../TestPics"));
            testRootPath = Path.Combine(asmPath, "AssetImportTestsRoot");
            originalRootFilepath = Path.Combine(testRootPath, "originals");
            thumbRootFilepath = Path.Combine(testRootPath, "thumbnails");
            fileSystemConfig = new FileSystemConfiguration(originalRootFilepath, thumbRootFilepath);
            locationManager = new FileSystemLocationManager(fileSystemConfig) as IFileSystemLocationManager;
            storeWriter = new FileSystemStore(locationManager);
        }
    }
}