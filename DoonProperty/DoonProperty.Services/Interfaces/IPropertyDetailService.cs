using DoonProperty.Models.CommonModels;

namespace DoonProperty.Services.Interfaces
{
    public interface IPropertyDetailService
    {
        Task CreatePropertyDetail(PropertyDetail propertyDetail);
        Task DeletePropertyDetail(Guid id);
        Task<List<PropertyDetail>> GetAllPropertyDetails();
        Task<PropertyDetail> GetPropertyDetailById(Guid id);
        Task UpdatePropertyDetail(Guid id, PropertyDetail propertyDetail);
    }
}