using System;
using System.ComponentModel.DataAnnotations;

namespace Jiggle.Core.Common
{
    public abstract class EntityBase : IEntity
    {
        [Key]
        [Required]
        public Guid Id { get; set; }
    }
}
