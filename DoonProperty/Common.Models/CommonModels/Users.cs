using MongoDB.Bson.Serialization.Attributes;

namespace DoonProperty.Models.CommonModels
{
    public class Users
    {
        /// <summary>
        /// Unique ID of the user.
        /// </summary>
        [BsonId]
        public Guid Id { get; set; }

        /// <summary>
        /// First Name of the user.
        /// </summary>
        public string FirstName { get; set; }

        /// <summary>
        /// Middle Name of the user.
        /// </summary>
        public string? MiddleName { get; set; }

        /// <summary>
        /// Last Name of the user.
        /// </summary>
        public string? LastName { get; set; }

        /// <summary>
        /// Address of the user.
        /// </summary>
        public Address Address { get; set; }

        /// <summary>
        /// Contact details of the user.
        /// </summary>
        public string[] ContactDetails { get; set; }

        /// <summary>
        /// Email of the user.
        /// </summary>
        public string[] Email { get; set; }

        /// <summary>
        /// User Type of the user.
        /// </summary>
        public Guid UserType { get; set; }

        /// <summary>
        /// Check if the user is active.
        /// </summary>
        public bool IsActive { get; set; }

        /// <summary>
        /// Date when the user was created.
        /// </summary>
        public DateTime CreatedDate { get; set; }
    }
}
