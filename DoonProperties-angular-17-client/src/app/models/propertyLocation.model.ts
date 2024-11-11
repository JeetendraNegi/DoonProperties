export interface PropertyLocation {
    /**
     * Plot number of the property.
     */
    plotNo?: string; // Nullable string in C# is represented as an optional string in TypeScript.

    /**
     * Street of the property.
     */
    street?: string;

    /**
     * Sector or nearby location of the property.
     */
    nearBy?: string;

    /**
     * City of the property.
     */
    city?: string;

    /**
     * Village of the property.
     */
    village?: string;

    /**
     * Zip code of the property.
     */
    zipCode?: string;

    /**
     * Tehseel of the property.
     */
    tehseel?: string;
}
