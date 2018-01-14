using System;
using System.Linq;
using Jiggle.Core.AssetManagement;
using Jiggle.Core.Entities;
using Jiggle.Core.Tests.Testing;
using Xunit;

namespace Jiggle.Core.Tests.AssetManagement
{
    [Collection("Database collection")]
    public class TagManagerTests : DatabaseTestsBase
    {
        private readonly TagManager tagManager;

        public TagManagerTests(DatabaseFixture fixture)
            : base(fixture)
        {
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
            Assert.Equal(2, tagsInDb.Count());
            Assert.Equal(2, tags.Count());
            Assert.Equal("tag1", tagsInDb[0].Name);
            Assert.Equal("tag2", tagsInDb[1].Name);
            Assert.Equal("tag1", tags[0].Name);
            Assert.Equal("tag2", tags[1].Name);
        }

        [Fact]
        public void Test_GetTagsByName_Existing_Only()
        {
            // Arrange
            var newTags = new[] { "tag1", "tag2" };
            fixture.DatabaseContext.Tags.AddRange(new Entities.Tag[]
            {
                new Tag { Id = Guid.NewGuid(), Name = "tag1" },
                new Tag { Id = Guid.NewGuid(), Name = "tag2" },
            });
            fixture.DatabaseContext.SaveChanges();

            // Act
            var countTagsBefore = fixture.DatabaseContext.Tags.Count();
            var tags = tagManager.GetTagsByName(newTags).ToList();
            fixture.DatabaseContext.SaveChanges();

            // Assert
            var tagsInDb = fixture.DatabaseContext.Tags.ToList();
            Assert.Equal(2, countTagsBefore);
            Assert.Equal(2, tagsInDb.Count());
            Assert.Equal(2, tags.Count());
            Assert.Equal("tag1", tagsInDb[0].Name);
            Assert.Equal("tag2", tagsInDb[1].Name);
            Assert.Equal("tag1", tags[0].Name);
            Assert.Equal("tag2", tags[1].Name);
        }

        [Fact]
        public void Test_GetTagsByName_Mixed()
        {
            // Arrange
            var newTags = new[] { "tag1", "tag2" };
            fixture.DatabaseContext.Tags.AddRange(new Entities.Tag[]
            {
                new Tag { Id = Guid.NewGuid(), Name = "tag1" },
            });
            fixture.DatabaseContext.SaveChanges();

            // Act
            var countTagsBefore = fixture.DatabaseContext.Tags.Count();
            var tags = tagManager.GetTagsByName(newTags).ToList();
            fixture.DatabaseContext.SaveChanges();

            // Assert
            var tagsInDb = fixture.DatabaseContext.Tags.ToList();
            Assert.Equal(1, countTagsBefore);
            Assert.Equal(2, tagsInDb.Count());
            Assert.Equal(2, tags.Count());
            Assert.Equal("tag1", tagsInDb[0].Name);
            Assert.Equal("tag2", tagsInDb[1].Name);
            Assert.Equal("tag1", tags[0].Name);
            Assert.Equal("tag2", tags[1].Name);
        }
    }
}
