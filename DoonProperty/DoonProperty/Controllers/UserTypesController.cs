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
    public class UserTypesController : ControllerBase
    {
        private readonly IUserTypeService _userTypeService;

        public UserTypesController(IUserTypeService userTypeService)
        {
            _userTypeService = userTypeService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllUserTypes()
        {
            var userTypes = await _userTypeService.GetAllUserTypes();
            return Ok(userTypes);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserTypeById(string id)
        {
            var userType = await _userTypeService.GetUserTypeById(Guid.Parse(id));
            return Ok(userType);
        }

        [HttpPost]
        public async Task<IActionResult> CreateUserType([FromBody] UserType userType)
        {
            userType.Id = Guid.NewGuid();
            await _userTypeService.CreateUserType(userType);
            return Created();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUserType(string id, [FromBody] UserType userType)
        {
            await _userTypeService.UpdateUserType(Guid.Parse(id), userType);
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUserType(string id)
        {
            await _userTypeService.DeleteUserType(Guid.Parse(id));
            return Ok();
        }
    }
}
