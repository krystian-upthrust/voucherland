/**
 * Validates the given password
 *
 * @param password
 * @return boolean
 */

export const ValidatePassword = (password: string): boolean => {
    let validated = false;

    if (password.length >= 8) validated = true;

    /*
    * Other posiblities
    * 1. checks if the password contains an upper letter
    * 2. checks if the password contains a symbol like (. , = -)
    * 3. ...
    * */

    return validated;
}