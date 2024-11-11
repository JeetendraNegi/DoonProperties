using MongoDB.Bson.Serialization.Attributes;

namespace DoonProperty.Models.CommonModels
{
    public class UserType
    {
        /// <summary>
        /// Unique ID of the user type.
        /// </summary>
        [BsonId]
        public Guid Id { get; set; }

        /// <summary>
        /// Type of the user.
        /// </summary>
        public string Type { get; set; }

        /// <summary>
        /// Description of the user type.
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// Check if the user type is active.
        /// </summary>
        public bool IsActive { get; set; }

        /// <summary>
        /// Date when the user type was created.
        /// </summary>
        public DateTime CreatedDate { get; set; }
    }
}
