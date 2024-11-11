namespace DoonProerty.DataModel.Interfaces
{
    public interface IMongoDBContext<T> where T : class
    {
        Task Create(T entity);
        Task Delete(Guid id);
        Task<T> Get(Guid id);
        Task<List<T>> GetAll();
        Task Update(Guid id, T entity);

        Task<T> GetByName(string name, string fieldName);
        //Task<List<T>> GetEmployeeByCountry(string country);
        //Task<List<T>> GetEmployeeByDesignation(string designation);
        //Task<List<T>> GetEmployeesByDepartment(string departmentName);
    }
}
