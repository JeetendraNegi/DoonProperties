using DoonProperty.DTOs;
using DoonProperty.Services.Helpers;
using DoonProperty.Services.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace DoonProperty.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowAllOrigins")]
    public class TokenController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IUserLoginService userLoginService;
        private readonly string Key = "ThisIsA16ByteKey";

        public TokenController(IConfiguration configuration, IUserLoginService userLoginService)
        {
            _configuration = configuration;
            this.userLoginService = userLoginService;
        }

        [HttpPost("GenerateToken")]
        public async Task<ActionResult<string>> GenerateToken([FromBody] UserLoginDTO login)
        {
            var user = await userLoginService.GetByUserName(login.LoginID);
            if (user != null && user.Password == PasswordHasher.EncryptString(login.Password, Key))
            {
                var usertoken = GenerateToken(user.LoginID);
                return Ok(new { token = usertoken });
            }
            return NotFound();
        }

        private string GenerateToken(string userId)
        {
            var jwtSettings = _configuration.GetSection("JwtSettings");

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, userId),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var key = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(jwtSettings["SecretKey"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: jwtSettings["Issuer"],
                audience: jwtSettings["Audience"],
                claims: claims,
                expires: DateTime.Now.AddMinutes(90),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
