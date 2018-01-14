using System;
using Jiggle.Core.AssetManagement;
using Jiggle.Core.Tests.Testing;
using Xunit;
using System.Linq;

namespace Jiggle.Core.Tests.AssetManagement
{
    [Collection("Database collection")]
    public class TagManagerTests
    {
        private readonly DatabaseFixture fixture;
        private readonly TagManager tagManager;

        public TagManagerTests(DatabaseFixture fixture)
        {
            this.fixture = fixture ?? throw new ArgumentNullException(nameof(fixture));

            tagManager = new TagManager(fixture.DatabaseContext);
        }

        [Fact]
        public void Test_GetTagsByName_Add_Only()
        {
            // Arrange
            var newTags = new[] { "tag1", "tag2" };

            // Act
            var countTagsBefore = fixture.DatabaseContext.Tags.Count();
            var tags = tagManager.GetTagsByName(newTags).ToList();
            fixture.DatabaseContext.SaveChanges();

            // Assert
            var tagsInDb = fixture.DatabaseContext.Tags.ToList();
            Assert.Equal(0, countTagsBefore);
            Assert.Equal(2, fixture.DatabaseContext.Tags.Count());
            Assert.Equal(2, tags.Count());
            Assert.Equal("tag1", tagsInDb[0].Name);
            Assert.Equal("tag2", tagsInDb[1].Name);
            Assert.Equal("tag1", tags[0].Name);
            Assert.Equal("tag2", tags[1].Name);
        }
    }
}
