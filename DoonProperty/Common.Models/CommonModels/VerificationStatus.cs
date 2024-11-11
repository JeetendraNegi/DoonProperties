using MongoDB.Bson.Serialization.Attributes;

namespace DoonProperty.Models.CommonModels
{
    public class VerificationStatus
    {
        /// <summary>
        /// Unique ID of the verification status.
        /// </summary>
        [BsonId]
        public Guid Id { get; set; }

        /// <summary>
        /// Status of the verification.
        /// </summary>
        public string? Status { get; set; }

        /// <summary>
        /// Description of the verification status.
        /// </summary>
        public string? Description { get; set; }

        /// <summary>
        /// Check if the status is active.
        /// </summary>
        public bool IsActive { get; set; }

        /// <summary>
        /// Date when the status was created.
        /// </summary>
        public DateTime CreatedDate { get; set; }
    }
}
