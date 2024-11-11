using DoonProerty.DataModel.Contexts;
using DoonProerty.DataModel.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace DoonProperty.Services.DependencyRegistration
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection RegisterDataModelServices(this IServiceCollection services)
        {
            // Register the IMyService interface with its implementation from LibraryA
            services.AddTransient(typeof(IMongoDBContext<>), typeof(MongoDBContext<>));

            // Register other services specific to LibraryB here if needed

            return services;
        }
    }
}
