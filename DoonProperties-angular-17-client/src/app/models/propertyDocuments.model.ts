export interface PropertyDocuments {
    /**
     * Document Type ID of the property.
     */
    propertyDocumentTypeId: string; // Guid in C# is represented as a string in TypeScript.

    /**
     * Document Path of the property.
     */
    documentPath?: string; // Nullable string in C# is represented as an optional string in TypeScript.

    /**
     * Document Name of the property.
     */
    documentName?: string;

    /**
     * Check if the document is active.
     */
    isActive: boolean;

    /**
     * Date when the document was created.
     */
    createdDate: Date; // DateTime in C# is represented as Date in TypeScript.
}
