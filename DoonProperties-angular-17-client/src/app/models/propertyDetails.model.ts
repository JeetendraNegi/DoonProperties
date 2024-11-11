import { PropertyLocation } from './propertyLocation.model';
import { PropertyDocuments } from './propertyDocuments.model';
import { VerificationStatus } from './verificationStatus.model';

export interface PropertyDetail {
    /**
     * Unique ID of the property.
     */
    id: string; // Guid in C# is represented as string in TypeScript.

    /**
     * User ID that is adding the property.
     */
    userId: string;

    /**
     * Property Location and full address.
     */
    propertyLocation: PropertyLocation;

    /**
     * Property Documents like Sale Deed, Mutation, etc.
     */
    propertyDocuments: PropertyDocuments[];

    /**
     * Check if the property is valid.
     */
    isPropertyApproved: boolean;

    /**
     * Check if the property is verified.
     */
    isPropertyVerified: boolean;

    /**
     * Check if the property is under verification.
     */
    verificationProcess?: string;

    /**
     * Property verification status.
     */
    verificationStatus: VerificationStatus;

    /**
     * Is the property loanable.
     */
    isLoanableProperty: boolean;

    /**
     * Loan available on the property.
     */
    loanAvailable?: number; // Nullable decimal in C# is represented as optional number in TypeScript.

    /**
     * Contact number for visit.
     */
    contactNoForVisit?: string;

    /**
     * Is the property for sale.
     */
    isActive: boolean;

    /**
     * Date when the property was added.
     */
    createdDate: Date; // DateTime in C# is represented as Date in TypeScript.
}
