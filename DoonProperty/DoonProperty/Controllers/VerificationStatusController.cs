using DoonProperty.Models.CommonModels;
using DoonProperty.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace DoonProperty.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowAllOrigins")]
    public class VerificationStatusController : ControllerBase
    {
        private readonly IVerificationStatusService _verificationStatusService;

        public VerificationStatusController(IVerificationStatusService verificationStatusService)
        {
            _verificationStatusService = verificationStatusService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllVerificationStatus()
        {
            var verificationStatus = await _verificationStatusService.GetAllVerificationStatus();
            return Ok(verificationStatus);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetVerificationStatusById(string id)
        {
            var verificationStatus = await _verificationStatusService.GetVerificationStatusById(Guid.Parse(id));
            return Ok(verificationStatus);
        }

        [HttpPost]
        public async Task<IActionResult> CreateVerificationStatus([FromBody] VerificationStatus verificationStatus)
        {
            verificationStatus.Id = Guid.NewGuid();
            await _verificationStatusService.CreateVerificationStatus(verificationStatus);
            return Created();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateVerificationStatus(string id, [FromBody] VerificationStatus verificationStatus)
        {
            await _verificationStatusService.UpdateVerificationStatus(Guid.Parse(id), verificationStatus);
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVerificationStatus(string id)
        {
            await _verificationStatusService.DeleteVerificationStatus(Guid.Parse(id));
            return Ok();
        }
    }
}
