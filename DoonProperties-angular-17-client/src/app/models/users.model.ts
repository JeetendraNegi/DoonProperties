import { Address } from './address.model'; // Assuming you have the Address model in a separate file.

export interface Users {
    /**
     * Unique ID of the user.
     */
    id: string; // Guid in C# is equivalent to string in TypeScript.

    /**
     * First Name of the user.
     */
    firstName: string;

    /**
     * Middle Name of the user.
     */
    middleName: string | null;

    /**
     * Last Name of the user.
     */
    lastName: string | null;

    /**
     * Address of the user.
     */
    address: Address;

    /**
     * Contact details of the user.
     */
    contactDetails: string[];

    /**
     * Email of the user.
     */
    email: string[];

    /**
     * User Type of the user.
     */
    userType: string; // Guid in C# is equivalent to string in TypeScript.

    /**
     * Check if the user is active.
     */
    isActive: boolean;

    /**
     * Date when the user was created.
     */
    createdDate: string;
}
