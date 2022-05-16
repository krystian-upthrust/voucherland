import {
    ECookiesOptions,
    ERememberMe,
    IToken,
    IUserLocalStorage
} from "./types";

/**
 * Local storage activities
 **/
export const LocalStorageService = (function(){

    // local storage keys
    const access_token = "access_token";
    const refresh_token = "refresh_token";
    const remember_me = "remember";
    const cookies = "cookies";
    const useremail = "user-email";
    const userpassword = "user-password";

    // Token storage
    function _setToken(tokens: IToken) {
        localStorage.setItem(access_token, tokens.access_token);
        localStorage.setItem(refresh_token, tokens.refresh_token);
    }
    function _getAccessToken() {
        return localStorage.getItem(access_token);
    }
    function _getRefreshToken() {
        return localStorage.getItem(refresh_token);
    }
    function _clearToken() {
        localStorage.removeItem(access_token);
        localStorage.removeItem(refresh_token);
    }

    // Remember user checkbox
    function _checkRememberMe() {
        if (localStorage.getItem(remember_me) === null) {
            localStorage.setItem(remember_me, ERememberMe.FORGET);
        }
    }
    function _getRememberMe() : boolean {
        return localStorage.getItem(remember_me) === ERememberMe.REMEMBER;
    }
    function _setRememberMe(remember: ERememberMe) {
        localStorage.setItem(remember_me, remember);
    }

    // Cookies storage
    function _checkCookiesSaved() {
        if (localStorage.getItem(cookies) === null) {
            localStorage.setItem(cookies, ECookiesOptions.REJECT);
        }
    }
    function _getCookiesSaved() : boolean {
        return localStorage.getItem(cookies) === ECookiesOptions.AGREE;
    }
    function _setCookiesSaved(save: string) {
        localStorage.setItem(cookies, save);
    }

    // User login info functions
    function _clearUserLogin() {
        localStorage.removeItem(useremail);
        localStorage.removeItem(userpassword);
    }
    function _setUserLogin(user : IUserLocalStorage) {
        localStorage.setItem(useremail, user.email);
        localStorage.setItem(userpassword, user.password);
    }
    function _getUserLogin() : IUserLocalStorage{
        if (localStorage.getItem(useremail) === null
            && localStorage.getItem(userpassword) === null)
        {
            return { email : "", password: "" };
        }

        return {
            email : localStorage.getItem(useremail)!,
            password: localStorage.getItem(userpassword)!
        };
    }


    return {
        // Token functions
        setToken : _setToken,
        getAccessToken : _getAccessToken,
        getRefreshToken : _getRefreshToken,
        clearToken : _clearToken,

        // Remember me option functions
        checkRememberMe: _checkRememberMe,
        setRememberMe : _setRememberMe,
        getRememberMe : _getRememberMe,

        // Cookies functions
        checkCookiesSaved : _checkCookiesSaved,
        getCookiesSaved : _getCookiesSaved,
        setCookiesSaved : _setCookiesSaved,

        // user login info functions
        clearUserLogin : _clearUserLogin,
        setUserLogin : _setUserLogin,
        getUserLogin : _getUserLogin
    }
})();
