using DoonProperty.Models.CommonModels;

namespace DoonProperty.Services.Interfaces
{
    public interface IVerificationStatusService
    {
        Task CreateVerificationStatus(VerificationStatus verificationStatus);
        Task DeleteVerificationStatus(Guid id);
        Task<List<VerificationStatus>> GetAllVerificationStatus();
        Task<VerificationStatus> GetVerificationStatusById(Guid id);
        Task UpdateVerificationStatus(Guid id, VerificationStatus verificationStatus);
    }
}