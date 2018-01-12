using System;
namespace Jiggle.Core.Common
{
    /// <summary>
    /// Marks a class as a query class. This is usefull to apply generic contrains
    /// so the compiler can ensure query classes/objects are used there querys are
    /// expected.
    /// </summary>
    public interface IQuery
    {
    }
}
