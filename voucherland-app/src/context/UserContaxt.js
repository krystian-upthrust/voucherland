import { createContext } from "react";

let user = {
  firstname: "Krystian",
  lastname: "Rola",
  email: "test@gmail.com",
  isAdmin: true,
};

export const UserContext = createContext({
  user: user,
  setUser: (user) => {},
});
