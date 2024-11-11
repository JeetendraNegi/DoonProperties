export interface Address {
    /**
     * Street of the user address.
     */
    street: string | null;

    /**
     * City of the user address.
     */
    city: string | null;

    /**
     * State of the user address.
     */
    state: string | null;

    /**
     * Country of the user address.
     */
    country: string | null;

    /**
     * Zip code of the user address.
     */
    zipCode: string | null;
}
