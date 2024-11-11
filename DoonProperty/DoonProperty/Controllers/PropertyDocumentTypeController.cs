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
    public class PropertyDocumentTypeController : ControllerBase
    {
        private readonly IPropertyDoucmentTypeService _propertyDoucmentTypeService;

        public PropertyDocumentTypeController(IPropertyDoucmentTypeService propertyDoucmentTypeService)
        {
            _propertyDoucmentTypeService = propertyDoucmentTypeService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllPropertyDocumentTypes()
        {
            var propertyDocumentTypes = await _propertyDoucmentTypeService.GetAllPropertyDocumentTypes();
            return Ok(propertyDocumentTypes);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPropertyDocumentTypeById(string id)
        {
            var propertyDocumentType = await _propertyDoucmentTypeService.GetPropertyDocumentTypeById(Guid.Parse(id));
            return Ok(propertyDocumentType);
        }

        [HttpPost]
        public async Task<IActionResult> CreatePropertyDocumentType([FromBody] PropertyDocumentType propertyDocumentType)
        {
            propertyDocumentType.Id = Guid.NewGuid();
            await _propertyDoucmentTypeService.CreatePropertyDocumentType(propertyDocumentType);
            return Created();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePropertyDocumentType(string id, [FromBody] PropertyDocumentType propertyDocumentType)
        {
            await _propertyDoucmentTypeService.UpdatePropertyDocumentType(Guid.Parse(id), propertyDocumentType);
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePropertyDocumentType(string id)
        {
            await _propertyDoucmentTypeService.DeletePropertyDocumentType(Guid.Parse(id));
            return Ok();
        }
    }
}
