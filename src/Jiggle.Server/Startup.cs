using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Jiggle.Core;
using Jiggle.Core.AssetManagement.FileStore;
using Jiggle.Core.Common;
using Jiggle.Server.Core;

namespace Jiggle.Server
{
    public class Startup
    {
        public Startup(
            IHostingEnvironment env,
            IConfiguration configuration)
        {
            CurrentEnvironment = env;
            Configuration = configuration;
        }

        public IHostingEnvironment CurrentEnvironment { get; }
        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services.AddMvc();
            services.AddDbContext<DatabaseContext>(options => options.UseSqlite("Data Source=Jiggle.db"));
            services.AddJiggleCore(
                new ThumbnailSettings(200, 200), // TODO
                new FileSystemConfiguration(
                    CurrentEnvironment.MapPath(Configuration["AssetManagement:OriginalsRootPath"]),
                    CurrentEnvironment.MapPath(Configuration["AssetManagement:ThumbnailsRootPath"])
                )
            );
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(builder => builder
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials());  

            app.UseMvc();
        }
    }
}
