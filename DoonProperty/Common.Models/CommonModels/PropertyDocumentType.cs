using MongoDB.Bson.Serialization.Attributes;

namespace DoonProperty.Models.CommonModels
{
    public class PropertyDocumentType
    {
        /// <summary>
        /// Unique ID of the property document type.
        /// </summary>
        [BsonId]
        public Guid Id { get; set; }

        /// <summary>
        /// Document type of the property.
        /// </summary>
        public string? DocumentType { get; set; }

        /// <summary>
        /// Description of the document type.
        /// </summary>
        public string? Description { get; set; }

        /// <summary>
        /// Check if the document type is active.
        /// </summary>
        public bool IsActive { get; set; }

        /// <summary>
        /// Date when the document type was created.
        /// </summary>
        public DateTime CreatedDate { get; set; }
    }
}
