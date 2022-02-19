import {createContext} from "react";

export const UserContext = createContext({isAdmin : false, setIsAdmin: (isAdmin) => {}});