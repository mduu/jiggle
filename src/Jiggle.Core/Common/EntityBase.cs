using System;
namespace Jiggle.Core.Common
{
    public abstract class EntityBase : IEntity
    {
        public Guid Id { get; set; }
    }
}
