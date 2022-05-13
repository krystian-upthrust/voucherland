/**
 * Local storage activities
 *
 * */
import {IToken} from "./types";

// local storage keys
const access_token = "access_token";
const refresh_token = "refresh_token";
const remember_me = "remember";

const LocalStorageService = (function(){

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
            localStorage.setItem(remember_me, "0");
        }
    }

    function _getRememberMe() : boolean {
        return localStorage.getItem(remember_me) === "1";
    }

    function _setRememberMe(remember: string) {
        localStorage.setItem(remember_me, remember);
    }

    return {
        setToken : _setToken,
        getAccessToken : _getAccessToken,
        getRefreshToken : _getRefreshToken,
        clearToken : _clearToken,
        checkRememberMe: _checkRememberMe,
        setRememberMe : _setRememberMe,
        getRememberMe : _getRememberMe,
    }
})();

export { LocalStorageService };