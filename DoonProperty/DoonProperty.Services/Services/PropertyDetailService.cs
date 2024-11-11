using DoonProerty.DataModel.Interfaces;
using DoonProperty.Models.CommonModels;
using DoonProperty.Services.Interfaces;

namespace DoonProperty.Services
{
    public class PropertyDetailService : IPropertyDetailService
    {
        private readonly IMongoDBContext<PropertyDetail> _context;

        public PropertyDetailService(IMongoDBContext<PropertyDetail> context)
        {
            _context = context;
        }

        public async Task<List<PropertyDetail>> GetAllPropertyDetails()
        {
            return await _context.GetAll();
        }

        public async Task<PropertyDetail> GetPropertyDetailById(Guid id)
        {
            return await _context.Get(id);
        }

        public async Task CreatePropertyDetail(PropertyDetail propertyDetail)
        {
            await _context.Create(propertyDetail);
        }

        public async Task UpdatePropertyDetail(Guid id, PropertyDetail propertyDetail)
        {
            await _context.Update(id, propertyDetail);
        }

        public async Task DeletePropertyDetail(Guid id)
        {
            await _context.Delete(id);
        }
    }
}
