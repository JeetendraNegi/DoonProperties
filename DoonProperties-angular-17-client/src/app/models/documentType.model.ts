export interface PropertyDocumentType {
    /**
     * Unique ID of the property document type.
     */
    id: string; // Guid in C# is represented as string in TypeScript.

    /**
     * Document type of the property.
     */
    documentType?: string; // Nullable string in C# is represented as an optional string in TypeScript.

    /**
     * Description of the document type.
     */
    description?: string; // Nullable string in C# is represented as an optional string in TypeScript.

    /**
     * Check if the document type is active.
     */
    isActive: boolean;

    /**
     * Date when the document type was created.
     */
    createdDate: string; // DateTime in C# is represented as Date in TypeScript.
}
