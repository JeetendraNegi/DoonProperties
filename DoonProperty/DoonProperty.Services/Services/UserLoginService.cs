using DnsClient;
using DoonProerty.DataModel.Interfaces;
using DoonProperty.Models.CommonModels;
using DoonProperty.Services.Helpers;
using DoonProperty.Services.Interfaces;

namespace DoonProperty.Services
{
    public class UserLoginService : IUserLoginService
    {
        private readonly IMongoDBContext<UserLogin> _context;
        private readonly string Key = "ThisIsA16ByteKey";

        public UserLoginService(IMongoDBContext<UserLogin> context)
        {
            _context = context;
        }

        public async Task<List<UserLogin>> GetAllUserLogins()
        {
            return await _context.GetAll();
        }

        public async Task<UserLogin> GetUserLoginById(Guid id)
        {
            return await _context.Get(id);
        }

        public async Task CreateUserLogin(UserLogin userLogin)
        {
            // check if the user already exists with same LoginID
            var user = await _context.GetByName(userLogin.LoginID, nameof(userLogin.LoginID));

            if (user != null)
            {
                throw new Exception("User already exists with same LoginID");
            }

            userLogin.Password = PasswordHasher.EncryptString(userLogin.Password, Key);
            await _context.Create(userLogin);
        }

        public async Task UpdateUserLogin(Guid id, UserLogin userLogin)
        {
            userLogin.Password = PasswordHasher.EncryptString(userLogin.Password, Key);
            await _context.Update(id, userLogin);
        }

        public async Task DeleteUserLogin(Guid id)
        {
            await _context.Delete(id);
        }

        public async Task<UserLogin> GetByUserName(string LoginID)
        {
            return await _context.GetByName(LoginID, nameof(LoginID));
        }
    }
}
