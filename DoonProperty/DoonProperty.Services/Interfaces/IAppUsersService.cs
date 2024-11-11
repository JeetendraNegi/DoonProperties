using DoonProperty.Models.CommonModels;

namespace DoonProperty.Services.Interfaces
{
    public interface IAppUsersService
    {
        Task CreateUser(Users user);
        Task DeleteUser(Guid id);
        Task<List<Users>> GetAllUsers();
        Task<Users> GetUserById(Guid id);
        Task UpdateUser(Guid id, Users user);
    }
}