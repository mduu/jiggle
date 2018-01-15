using System;
using System.Threading.Tasks;
using FakeItEasy;
using Jiggle.Core.AssetManagement;
using Jiggle.Core.AssetManagement.FileStore;
using Jiggle.Core.AssetManagement.Import;
using Jiggle.Core.Common;
using Jiggle.Core.Security;
using Jiggle.Core.Tests.Testing;
using Xunit;

namespace Jiggle.Core.Tests.AssetManagement.Import
{
    [Collection(DatabaseCollection.CollectionNanem)]
    public class AssetImporterTests : DatabaseTestsBase
    {
        private JiggleSettings jiggleSettings = new JiggleSettings();
        private IStoreWriter storeWriter;
        private IAlbumManager albumManager;
        private ITagManager tagManager;
        private IUserService userService;
        private IThumbnailGenerator thumbnailGenerator;
        private IAssetImporter assetImporter;

        public AssetImporterTests(DatabaseFixture fixture)
            : base(fixture)
        {
            SetUpBasicTestScenario();
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

        private void SetUpBasicTestScenario()
        {
            storeWriter = new MockStoreWriter();
            albumManager = A.Fake<IAlbumManager>();
            tagManager = A.Fake<ITagManager>();
            userService = A.Fake<IUserService>();
            thumbnailGenerator = A.Fake<IThumbnailGenerator>();
            assetImporter = new AssetImporter(
                jiggleSettings,
                databaseContext,
                storeWriter,
                albumManager,
                tagManager,
                userService,
                thumbnailGenerator
            );
        }
    }
}