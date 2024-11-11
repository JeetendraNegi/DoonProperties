using DoonProperty.Models.CommonModels;

namespace DoonProperty.Services.Interfaces
{
    public interface IPropertyDoucmentTypeService
    {
        Task CreatePropertyDocumentType(PropertyDocumentType propertyDocumentType);
        Task DeletePropertyDocumentType(Guid id);
        Task<List<PropertyDocumentType>> GetAllPropertyDocumentTypes();
        Task<PropertyDocumentType> GetPropertyDocumentTypeById(Guid id);
        Task UpdatePropertyDocumentType(Guid id, PropertyDocumentType propertyDocumentType);
    }
}