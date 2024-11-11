using MongoDB.Bson.Serialization.Attributes;

namespace DoonProperty.Models.CommonModels
{
    public class PropertyDetail
    {
        /// <summary>
        /// Unique ID of the property.
        /// </summary>
        [BsonId]
        public Guid Id { get; set; }

        /// <summary>
        /// User that is adding the property.
        /// </summary>
        public Guid UserID { get; set; }

        /// <summary>
        /// Property Location and full address.
        /// </summary>
        public PropertyLocation PropertyLocation { get; set; }

        /// <summary>
        /// Property Documents like Sale Deed, Mutation, etc.
        /// </summary>
        public List<PropertyDocuments> PropertyDocuments { get; set; }

        /// <summary>
        /// Check if the property is Valid
        /// </summary>
        public bool IsPropertyApproved { get; set; }

        /// <summary>
        /// Check if the property is verified
        /// </summary>
        public bool IsPropertyVerified { get; set; }

        /// <summary>
        /// Check if the property is under verification
        /// </summary>
        public string? VerificationProcess { get; set; }

        /// <summary>
        /// Property verification status
        /// </summary>
        public VerificationStatus VerificationStatus { get; set; }

        /// <summary>
        /// Is property is loanable
        /// </summary>
        public bool IsLoanableProperty { get; set; }

        /// <summary>
        /// Loan available on the property
        /// </summary>
        public decimal? LoanAvailable { get; set; }

        /// <summary>
        /// Contact number for visit
        /// </summary>
        public string? ContactNoForVisit { get; set; }

        /// <summary>
        /// Is property is for sale
        /// </summary>
        public bool IsActive { get; set; }

        /// <summary>
        /// Date when the property was added
        /// </summary>
        public DateTime CreatedDate { get; set; }
    }
}
