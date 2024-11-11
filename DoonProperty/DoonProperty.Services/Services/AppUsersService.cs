using DoonProerty.DataModel.Interfaces;
using DoonProperty.Models.CommonModels;
using DoonProperty.Services.Interfaces;

namespace DoonProperty.Services
{
    public class AppUsersService : IAppUsersService
    {
        private readonly IMongoDBContext<Users> _context;

        public AppUsersService(IMongoDBContext<Users> context)
        {
            _context = context;
        }

        public async Task<List<Users>> GetAllUsers()
        {
            return await _context.GetAll();
        }

        public async Task<Users> GetUserById(Guid id)
        {
            return await _context.Get(id);
        }

        public async Task CreateUser(Users user)
        {
            await _context.Create(user);
        }

        public async Task UpdateUser(Guid id, Users user)
        {
            await _context.Update(id, user);
        }

        public async Task DeleteUser(Guid id)
        {
            await _context.Delete(id);
        }
    }
}
