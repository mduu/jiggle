using Xunit;

namespace Jiggle.Core.Tests.Testing
{
    [CollectionDefinition(CollectionNanem)]
    public class DatabaseCollection : ICollectionFixture<DatabaseFixture>
    {
        public const string CollectionNanem = "Jiggle DB Tests";

        // This class has no code, and is never created. Its purpose is simply
        // to be the place to apply [CollectionDefinition] and all the
        // ICollectionFixture<> interfaces.
    }
}
