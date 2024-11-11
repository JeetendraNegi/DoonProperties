using DoonProperty.Models.CommonModels;
using DoonProperty.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.IO;

namespace DoonProperty.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowAllOrigins")]
    public class PropertyDetailController : ControllerBase
    {
        private readonly IPropertyDetailService _propertyDetailService;

        public PropertyDetailController(IPropertyDetailService propertyDetailService)
        {
            _propertyDetailService = propertyDetailService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllPropertyDetails()
        {
            var propertyDetails = await _propertyDetailService.GetAllPropertyDetails();
            return Ok(propertyDetails);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPropertyDetailById(string id)
        {
            var propertyDetail = await _propertyDetailService.GetPropertyDetailById(Guid.Parse(id));
            return Ok(propertyDetail);
        }

        [HttpPost]
        public async Task<IActionResult> CreatePropertyDetail([FromForm] PropertyDetail propertyDetail, [FromForm] List<IFormFile> files)
        {
            try
            {
                // Save the file to the folder
                var filePaths = await SaveFile(files);

                // update the property detail object with the file paths

                var documents = new List<PropertyDocuments>();
                foreach (var filePath in filePaths)
                {
                    documents.Add(new PropertyDocuments
                    {
                        propertyDoucmentTypeId = Guid.NewGuid(),
                        DocumentPath = filePath,
                        DocumentName = Path.GetFileName(filePath),
                        IsActive = true,
                        CreatedDate = DateTime.Now
                    });
                }
                propertyDetail.PropertyDocuments = documents;


                // Saving the Data.
                propertyDetail.Id = Guid.NewGuid();
                await _propertyDetailService.CreatePropertyDetail(propertyDetail);
                return Created();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePropertyDetail(string id, [FromBody] PropertyDetail propertyDetail)
        {
            await _propertyDetailService.UpdatePropertyDetail(Guid.Parse(id), propertyDetail);
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePropertyDetail(string id)
        {
            await _propertyDetailService.DeletePropertyDetail(Guid.Parse(id));
            return Ok();
        }

        private async Task<List<string>> SaveFile(List<IFormFile> files)
        {
            var filePaths = new List<string>();
            var allowedExtensions = new[] { ".jpg", ".png", ".pdf", ".jepg", ".mp4", "*" };
            var maxFileSize = 1073741824; // 1 GB

            var path = Path.Combine("PropertyDoucments");
            //Directory.CreateDirectory(Path.GetDirectoryName(path));
            // Ensure the directory exists
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }

            foreach (var file in files)
            {
                if (file.Length == 0)
                {
                    continue; // Skip empty files
                }

                // Check file size
                if (file.Length > maxFileSize)
                {
                    throw new Exception($"File {file.FileName} exceeds the maximum allowed size of 10 MB.");
                }

                // Check file type
                var extension = Path.GetExtension(file.FileName);
                if (!allowedExtensions.Contains(extension))
                {
                    throw new Exception($"File type {extension} is not allowed.");
                }

                // Get just the file name without extension
                string fileNameWithoutExtension = Path.GetFileNameWithoutExtension(file.FileName);

                var filepath = Path.Combine("PropertyDoucments", fileNameWithoutExtension + Guid.NewGuid() + extension);

                filePaths.Add(filepath);
            }

            //foreach (var file in filePaths)
            //{
            //    using (var stream = new FileStream(file, FileMode.Create))
            //    {
            //        await file.CopyToAsync(stream);
            //    }
            //}

            for (int i = 0; i < files.Count; i++)
            {
                var file = files[i];
                var filePath = filePaths[i];

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }
            }

            return filePaths;
        }
    }
}
