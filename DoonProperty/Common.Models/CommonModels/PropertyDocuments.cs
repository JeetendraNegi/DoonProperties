namespace DoonProperty.Models.CommonModels
{
    public class PropertyDocuments
    {
        /// <summary>
        /// Document Type of the property.
        /// </summary>
        public Guid propertyDoucmentTypeId { get; set; }

        /// <summary>
        /// Document Path of the property.
        /// </summary>
        public string? DocumentPath { get; set; }

        /// <summary>
        /// Document Name of the property.
        /// </summary>
        public string? DocumentName { get; set; }

        /// <summary>
        /// Check if the document is active.
        /// </summary>
        public bool IsActive { get; set; }

        /// <summary>
        /// Date when the document was created.
        /// </summary>
        public DateTime CreatedDate { get; set; }
    }
}
