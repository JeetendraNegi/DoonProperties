export interface UserType {
    /**
     * Unique ID of the user type.
     */
    id: string;  // Guid in C# maps to string in TypeScript

    /**
     * Type of the user.
     */
    type: string;

    /**
     * Description of the user type.
     */
    description: string;

    /**
     * Check if the user type is active.
     */
    isActive: boolean;

    /**
     * Date when the user type was created.
     */
    createdDate: string;  // DateTime in C# maps to Date in TypeScript
}
