import React, {FC, useEffect, useState, useContext, useLayoutEffect} from "react";
import {
    BrowserRouter as Router,
    Navigate,
    Outlet,
    useRoutes,
} from "react-router-dom";

import "../scss/app.scss";
import "../scss/account.scss";
import "../scss/admin.scss";
import "../scss/articles.scss";
import "../scss/contact.scss";
import "../scss/cookies.scss";
import "../scss/footer.scss";
import "../scss/header.scss";
import "../scss/home.scss";
import "../scss/login_register.scss";
import "../scss/media_queries.scss";
import "../scss/variables.scss";
import "../scss/voucher_detail_page.scss";
import "../scss/vouchers.scss";
import "../scss/voucher_item.scss"
import "../scss/global.scss";

import {
    ROUTE_ACCOUNT,
    ROUTE_ADMIN,
    ROUTE_ADMIN_ADD_ARTICLE,
    ROUTE_ADMIN_ADD_VOUCHER,
    ROUTE_ADMIN_ADMINS,
    ROUTE_ADMIN_ARTICLES,
    ROUTE_ADMIN_VOUCHERS,
    ROUTE_ARTICLES,
    ROUTE_ARTICLES_DETAIL,
    ROUTE_CONTACT,
    ROUTE_HOME,
    ROUTE_LOGIN,
    ROUTE_REGISTER,
    ROUTE_VOUCHERS, ROUTE_VOUCHERS_DETAIL,
} from "../utils/routes";
import {UserContext} from "../utils/context/UserContext";
import {IUser, IUserContext} from "../utils/types";
import {LocalStorageService} from "../utils/LocalStorageService";
import {AuthApi} from "../utils/axios/Axios";
import {RequestRoutes} from "../utils/axios/RequestRoutes";

import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";
import AccountPage from "../pages/Account/AccountPage";
import AdminVouchers from "../pages/Admin/AdminVouchers";
import AdminArticles from "../pages/Admin/AdminArticles";
import AdminAdmins from "../pages/Admin/AdminAdmins";
import NewVoucher from "../components/Admin/Vouchers/NewVoucher/NewVoucher";
import ContactPage from "../pages/Contact/ContactPage";
import ArticleDetailPage from "../pages/Articles/ArticleDetailPage";
import ArticlesPage from "../pages/Articles/ArticlesPage";
import VouchersPage from "../pages/Vouchers/VouchersPage";
import Home from "../pages/Home/Home";
import NewArticle from "../components/Admin/Articles/NewArticle";
import Cookies from "../components/Cookies/Cookies";
import VoucherDetailPage from "../pages/Vouchers/VoucherDetailPage";

const routes = ( user: IUserContext | null ) => [
    {
        path: ROUTE_HOME,
        element: <Outlet/>,
        // element: !user ? <Navigate to={ROUTE_AUTH_LOGIN} /> : <Layout />,
        children: [
            {
                path: ROUTE_HOME,
                element: <Home/>,
            },
            {
                path: ROUTE_VOUCHERS,
                element: <Outlet/>,
                children: [
                    {
                        path: ROUTE_VOUCHERS,
                        element: <VouchersPage/>,
                    },
                    {
                        path: ROUTE_VOUCHERS_DETAIL,
                        element: <VoucherDetailPage/>,
                    },
                ],
            },
            {
                path: ROUTE_ARTICLES,
                element: <Outlet/>,
                children: [
                    {
                        path: ROUTE_ARTICLES,
                        element: <ArticlesPage/>,
                    },
                    {
                        path: ROUTE_ARTICLES_DETAIL,
                        element: <ArticleDetailPage/>,
                    },
                ],
            },
            {
                path: ROUTE_CONTACT,
                element: <ContactPage/>,
            },
            {
                path: ROUTE_LOGIN,
                element: <LoginPage/>,
            },
            {
                path: ROUTE_REGISTER,
                element: <RegisterPage/>,
            },
            {
                path: ROUTE_ACCOUNT,
                element: !user!.loggedIn ? <Navigate to={ROUTE_LOGIN}/> : <AccountPage/>,
            },
            {
                path: ROUTE_ADMIN,
                element: <Outlet/>,
                children: [
                    {
                        path: ROUTE_ADMIN,
                        element: <Navigate to={ROUTE_ADMIN_VOUCHERS}/>,
                    },
                    {
                        path: ROUTE_ADMIN_VOUCHERS,
                        element: <AdminVouchers/>,
                    },
                    {
                        path: ROUTE_ADMIN_ARTICLES,
                        element: <AdminArticles/>,
                    },
                    {
                        path: ROUTE_ADMIN_ADMINS,
                        element: <AdminAdmins/>,
                    },
                    {
                        path: ROUTE_ADMIN_ADD_VOUCHER,
                        element: <NewVoucher/>,
                    },
                    {
                        path: ROUTE_ADMIN_ADD_ARTICLE,
                        element: <NewArticle/>,
                    },
                ],
            },
        ],
    },
];

const Routes: FC = () => {
    const userContext = useContext(UserContext);

    return useRoutes(routes(userContext!));
};

function App() {
    const [cookies, setCookies] = useState<boolean>(false);
    const [user, setUser] = useState<IUser | null>(null);
    const [loggedIn, setLoggedIn] = useState<boolean>(false);


    /**
     * Checks if there is an access token available in the localstorage (User was logged in at some point)
     * If yes, sends a get request to get the user info (if access token is still active)
    **/
    useLayoutEffect(() => {
        // check if a user is already logged in
        if (!user && LocalStorageService.getAccessToken()) {
            AuthApi
                .get(RequestRoutes.ME)
                .then(response => {
                    if (response.status === 200) {
                        setUser(response.data.user);
                        setLoggedIn(true) ;
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, []);


    /**
     * Checks if the users agreed to the cookies policy
     */
    useEffect(() => {
        LocalStorageService.checkCookiesSaved();
        setCookies(LocalStorageService.getCookiesSaved());
    }, [cookies]);

    /**
     * Updates the cookie state if a cookie is accepted
     */
    function SetCookie(cookie: boolean) {
        setCookies(cookie);
    }

    return (
        <section className="app">
            {!cookies && <Cookies setCookie={SetCookie}/>}

            <UserContext.Provider
                value={{
                    loggedIn: loggedIn,
                    setLoggedIn: setLoggedIn,
                    user: user,
                    setUser: setUser,
                }}
            >
                <Router>
                    <Routes/>
                </Router>
            </UserContext.Provider>
        </section>
    );
}

export default App;
