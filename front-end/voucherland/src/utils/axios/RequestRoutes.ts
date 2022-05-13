
export const RequestRoutes = {
    // voucher routes
    getAllVouchers : "/v1/vouchers",
    getSingleVouchers : "/v1/vouchers/:id",
    postNewVoucher : "/v1/vouchers",
    updateSingleVoucher : "/v1/vouchers/:id",
    deleteSingleVoucher : "/v1/vouchers/:id",

    // article routes
    getAllArticles : "/v1/articles",
    getSingleArticle : "/v1/articles/:id",
    postNewArticle : "/v1/articles",
    updateSingleArticle : "/v1/articles/:id",
    deleteSingleArticle : "/v1/articles/:id",

    //tag routes
    getAllTags : "/v1/tags",
    getSingleTag : "/v1/tags/:id",
    postNewTag : "/v1/tags",
    updateSingleTag : "/v1/tags/:id",
    deleteSingleTag : "/v1/tags/:id",

    // auth routes
    LOGIN : "/auth/login",
    ME : "/auth/me",
    LOGOUT: "/auth/logout",
}