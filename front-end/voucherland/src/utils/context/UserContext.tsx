import React, { createContext } from "react";
import { IAuth, IUser } from "../types";

export const UserContext = createContext<IAuth | null>(null);
