using System;
namespace Jiggle.Core
{
    public static class ServiceProviderExtensions
    {
        public static void AddJiggleCore(this IServiceProvider serviceProvider)
        {
            if (serviceProvider == null) throw new ArgumentNullException(nameof(serviceProvider));

        }
    }
}
