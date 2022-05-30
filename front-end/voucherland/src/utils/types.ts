export interface IUser {
    id?: number;
    firstname: string;
    lastname: string;
    email: string;
    password?: string;
    is_admin: boolean;
}

export interface IUserContext {
    loggedIn: boolean;
    setLoggedIn: (loggedIn: boolean) => void;
    user: IUser | null;
    setUser: (user: IUser | null) => void;
}

export interface IVoucher {
    id: number;
    name: string;
    description: string;
    product_image: string;
    store_image: string;
    discount: string;
    discount_type: string;
    tag: string;
    downloads: number;
    expiry: string;
    status: string;
}

export interface IArticle {
    id: number;
    title: string;
    description: string;
    content: string;
    sub_title: string;
    sub_content: string;
    article_image: string;
    tags: ITag[];
    read_time: string;
    status: string;
}

export interface ITag {
    title: string;
    color: string;
}

export enum IArticleStatus {

}

export interface IAdmin {
    id: number;
    name: string;
    email: string;
}

// Type for the subnavigation in accountpage
export interface ISubNav {
    vouchers: boolean;
    newsletter: boolean;
    settings: boolean;
}

export interface IAdminSubNav {
    public: boolean;
    private: boolean;
    expired?: boolean;
}

export interface IName {
    firstname: string;
    lastname: string;
}

export interface IToken {
    access_token: string;
    refresh_token: string;
}

export interface IUserLocalStorage {
    email : string;
    password : string;
}

export enum ECookiesOptions {
    AGREE = "agree",
    REJECT = "reject"
}

export enum ERememberMe {
    REMEMBER = "remember",
    FORGET = "forget"
}