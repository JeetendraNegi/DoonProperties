using DoonProperty.Models.CommonModels;

namespace DoonProperty.Services.Interfaces
{
    public interface IUserLoginService
    {
        Task CreateUserLogin(UserLogin userLogin);
        Task DeleteUserLogin(Guid id);
        Task<List<UserLogin>> GetAllUserLogins();
        Task<UserLogin> GetByUserName(string LoginID);
        Task<UserLogin> GetUserLoginById(Guid id);
        Task UpdateUserLogin(Guid id, UserLogin userLogin);
    }
}