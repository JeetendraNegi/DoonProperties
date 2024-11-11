export interface VerificationStatus {
    /**
     * Unique ID of the verification status.
     */
    id: string; // Guid in C# is represented as string in TypeScript.

    /**
     * Status of the verification.
     */
    status?: string; // Nullable string in C# is represented as an optional string in TypeScript.

    /**
     * Description of the verification status.
     */
    description?: string; // Nullable string in C# is represented as an optional string in TypeScript.

    /**
     * Check if the status is active.
     */
    isActive: boolean;

    /**
     * Date when the status was created.
     */
    createdDate: string; // DateTime in C# is represented as Date in TypeScript.
}
