using DoonProerty.DataModel.Interfaces;
using DoonProperty.Models.CommonModels;
using DoonProperty.Services.Interfaces;

namespace DoonProperty.Services
{
    public class VerificationStatusService : IVerificationStatusService
    {
        private readonly IMongoDBContext<VerificationStatus> _context;

        public VerificationStatusService(IMongoDBContext<VerificationStatus> context)
        {
            _context = context;
        }

        public async Task<List<VerificationStatus>> GetAllVerificationStatus()
        {
            return await _context.GetAll();
        }

        public async Task<VerificationStatus> GetVerificationStatusById(Guid id)
        {
            return await _context.Get(id);
        }

        public async Task CreateVerificationStatus(VerificationStatus verificationStatus)
        {
            await _context.Create(verificationStatus);
        }

        public async Task UpdateVerificationStatus(Guid id, VerificationStatus verificationStatus)
        {
            await _context.Update(id, verificationStatus);
        }

        public async Task DeleteVerificationStatus(Guid id)
        {
            await _context.Delete(id);
        }
    }
}
