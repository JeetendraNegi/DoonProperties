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
    public class AppUsersController : ControllerBase
    {
        private readonly IAppUsersService _appUserService;

        public AppUsersController(IAppUsersService appUserService)
        {
            _appUserService = appUserService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAppUsers()
        {
            var appUsers = await _appUserService.GetAllUsers();
            return Ok(appUsers);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAppUserById(string id)
        {
            var appUser = await _appUserService.GetUserById(Guid.Parse(id));
            return Ok(appUser);
        }

        [HttpPost]
        public async Task<IActionResult> CreateAppUser([FromBody] Users appUser)
        {
            appUser.Id = Guid.NewGuid();
            await _appUserService.CreateUser(appUser);
            return Created();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAppUser(string id, [FromBody] Users appUser)
        {
            await _appUserService.UpdateUser(Guid.Parse(id), appUser);
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAppUser(string id)
        {
            await _appUserService.DeleteUser(Guid.Parse(id));
            return Ok();
        }
    }
}
