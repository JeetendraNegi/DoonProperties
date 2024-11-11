using DoonProperty.Models.CommonModels;

namespace DoonProperty.Services.Interfaces
{
    public interface IUserTypeService
    {
        Task CreateUserType(UserType userType);
        Task DeleteUserType(Guid id);
        Task<List<UserType>> GetAllUserTypes();
        Task<UserType> GetUserTypeById(Guid id);
        Task UpdateUserType(Guid id, UserType userType);
    }
}