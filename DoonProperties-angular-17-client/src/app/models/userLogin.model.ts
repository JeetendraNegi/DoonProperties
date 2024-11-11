export interface UserLogin {
    /**
     * Unique ID of the user login.
     */
    id: string; // Guid in C# is equivalent to string in TypeScript.

    /**
     * Unique ID of the user.
     */
    userID: string; // Guid in C# is equivalent to string in TypeScript.

    /**
     * Login ID of the user.
     */
    loginID: string;

    /**
     * Password of the user.
     */
    password: string;

    /**
     * Check if the user login is active.
     */
    isActive: boolean;

    /**
     * Date when the user login was created.
     */
    createdDate: Date;
}
