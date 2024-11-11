using DoonProerty.DataModel.Interfaces;
using DoonProperty.Models.CommonModels;
using DoonProperty.Services.Interfaces;

namespace DoonProperty.Services
{
    public class UserTypeService : IUserTypeService
    {
        private readonly IMongoDBContext<UserType> _context;

        public UserTypeService(IMongoDBContext<UserType> context)
        {
            _context = context;
        }

        public async Task<List<UserType>> GetAllUserTypes()
        {
            return await _context.GetAll();
        }

        public async Task<UserType> GetUserTypeById(Guid id)
        {
            return await _context.Get(id);
        }

        public async Task CreateUserType(UserType userType)
        {
            await _context.Create(userType);
        }

        public async Task UpdateUserType(Guid id, UserType userType)
        {
            await _context.Update(id, userType);
        }

        public async Task DeleteUserType(Guid id)
        {
            await _context.Delete(id);
        }
    }
}
