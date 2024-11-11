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
    public class UserLoginController : ControllerBase
    {
        private readonly IUserLoginService _userLoginService;

        public UserLoginController(IUserLoginService userLoginService)
        {
            _userLoginService = userLoginService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllUserLogins()
        {
            var userLogins = await _userLoginService.GetAllUserLogins();
            return Ok(userLogins);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserLoginById(string id)
        {
            var userLogin = await _userLoginService.GetUserLoginById(Guid.Parse(id));
            return Ok(userLogin);
        }


        [HttpPost]
        public async Task<IActionResult> CreateUserLogin([FromBody] UserLogin userLogin)
        {
            try
            {
                userLogin.Id = Guid.NewGuid();
                await _userLoginService.CreateUserLogin(userLogin);
                return Created();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUserLogin(string id, [FromBody] UserLogin userLogin)
        {
            await _userLoginService.UpdateUserLogin(Guid.Parse(id), userLogin);
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUserLogin(string id)
        {
            await _userLoginService.DeleteUserLogin(Guid.Parse(id));
            return Ok();
        }
    }
}
