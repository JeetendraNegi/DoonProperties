using DoonProerty.DataModel.Interfaces;
using DoonProperty.Models.CommonModels;
using DoonProperty.Services.Interfaces;

namespace DoonProperty.Services
{
    public class PropertyDoucmentTypeService : IPropertyDoucmentTypeService
    {
        private readonly IMongoDBContext<PropertyDocumentType> _context;

        public PropertyDoucmentTypeService(IMongoDBContext<PropertyDocumentType> context)
        {
            _context = context;
        }

        public async Task<List<PropertyDocumentType>> GetAllPropertyDocumentTypes()
        {
            return await _context.GetAll();
        }

        public async Task<PropertyDocumentType> GetPropertyDocumentTypeById(Guid id)
        {
            return await _context.Get(id);
        }

        public async Task CreatePropertyDocumentType(PropertyDocumentType propertyDocumentType)
        {
            await _context.Create(propertyDocumentType);
        }

        public async Task UpdatePropertyDocumentType(Guid id, PropertyDocumentType propertyDocumentType)
        {
            await _context.Update(id, propertyDocumentType);
        }

        public async Task DeletePropertyDocumentType(Guid id)
        {
            await _context.Delete(id);
        }
    }
}
