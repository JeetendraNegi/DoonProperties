using MongoDB.Bson.Serialization.Attributes;

namespace DoonProperty.Models.CommonModels
{
    public class UserLogin
    {
        /// <summary>
        /// Unique ID of the user login.
        /// </summary>
        [BsonId]
        public Guid Id { get; set; }

        /// <summary>
        /// Unique ID of the user.
        /// </summary>
        public Guid UserID { get; set; }

        /// <summary>
        /// Login ID of the user.
        /// </summary>
        public string LoginID { get; set; }

        /// <summary>
        /// Password of the user.
        /// </summary>
        public string Password { get; set; }

        /// <summary>
        /// Check if the user login is active.
        /// </summary>
        public bool IsActive { get; set; }

        /// <summary>
        /// Date when the user login was created.
        /// </summary>
        public DateTime CreatedDate { get; set; }
    }
}
