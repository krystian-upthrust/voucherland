
export const RequestRoutes = {
    // public api's
    GetVouchersByPublicStatus : "/public/vouchers/public",
    GetAllPublicArticles : "/public/articles/public",
    GetSingleArticle : "/public/article/:id",
    GetRelatedArticles : "/public/articles/related/:tag",

    // voucher routes
    // getAllVouchers : "/v1/vouchers",
    GetVouchersByPrivateStatus : "/v1/vouchers/private",
    GetVouchersByExpiredStatus : "/v1/vouchers/expired",
    GetSingleVoucher : "/v1/vouchers/:id",
    PostNewVoucher : "/v1/vouchers",
    UpdateSingleVoucher : "/v1/vouchers/:id",
    DeleteSingleVoucher : "/v1/vouchers/:id",

    // article routes
    PostNewArticle : "/v1/articles",
    UpdateSingleArticle : "/v1/articles/:id",
    DeleteSingleArticle : "/v1/articles/:id",

    //tag routes
    GetAllTags : "/v1/tags",
    GetSingleTag : "/v1/tags/:id",
    PostNewTag : "/v1/tags",
    UpdateSingleTag : "/v1/tags/:id",
    DeleteSingleTag : "/v1/tags/:id",

    // auth routes
    LOGIN : "/auth/login",
    ME : "/auth/me",
    LOGOUT: "/auth/logout",

    // register user
    REGISTER : "/register",

    //update user info
    updateUser : '/v1/users/:id',

    //get all admins
    ADMINS : "/v1/admins"
}