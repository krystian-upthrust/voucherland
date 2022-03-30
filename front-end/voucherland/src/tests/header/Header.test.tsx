import React from "react";
// Renders pages/componennts in an virtual DOM in order to run the tests
import { cleanup, render, screen } from "@testing-library/react";
// this import allows the usage of keywoord expect
import "@testing-library/jest-dom/extend-expect";

// importing the to-be tested components
import Header from "../../components/Header/Header";
import Nav from "../../components/Header/Nav";
import { UserContext } from "../../utils/context/UserContext";
import { IUser, IUserContext } from "../../utils/types";
import NavOptionButtons from "../../components/Header/NavOptionButtons";

// setting up a mock-navigation for testing
const mockedNavigator = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
}));

// first test
test("[DevTest] Mobile header renders with correct title", () => {
  // rendering tested component
  render(<Header />);
  const headerElement: HTMLElement = screen.getByTestId("mobile-header");

  // option 1 is to use textContent to get the text inside h1
  expect(headerElement.textContent).toBe("voucherland");

  // option 2 is to use toHaveTextContent functions
  expect(headerElement).toHaveTextContent("voucherland");
});

describe("[DevTest] Testing <Nav/> Component", () => {
  let headerElement: HTMLElement,
    homeItem: HTMLLIElement,
    vouchersItem: HTMLLIElement,
    articlesItem: HTMLLIElement,
    contactItem: HTMLLIElement;

  beforeEach(() => {
    render(<Nav />);

    headerElement = screen.getByTestId("desktop-header");
    homeItem = screen.getByTestId("list-item-home");
    vouchersItem = screen.getByTestId("list-item-vouchers");
    articlesItem = screen.getByTestId("list-item-articles");
    contactItem = screen.getByTestId("list-item-contact");
  });

  afterEach(() => {
    cleanup();
  });

  it("[DevTest] Desktop header renders with correct title", () => {
    // using option 1 [see above] ... testing if h1 element content is correct
    expect(headerElement).toHaveTextContent("voucherland");
  });

  test("[DevTest] Navigation renders with correct list items", () => {
    expect(homeItem).toHaveTextContent("Home");
    expect(vouchersItem).toHaveTextContent("Vouchers");
    expect(articlesItem).toHaveTextContent("Articles");
    expect(contactItem).toHaveTextContent("Contact");
  });
});

describe("[DevTest] Testing <NavOptionButtons /> Component", () => {
  let registerBtn: HTMLButtonElement;
  let loginBtn: HTMLButtonElement;
  let accountBtn: HTMLButtonElement;
  let logoutBtn: HTMLButtonElement;

  function ContextProvider(loginStatus: boolean): JSX.Element {
    let testUser: IUser = {
      firstName: "jane",
      lastName: "doe",
      email: "jane@gmail.com",
      password: "jane123",
      admin: true,
    };

    let userContext: IUserContext = {
      loggedIn: loginStatus,
      setLoggedIn: jest.fn(),
      user: loginStatus ? testUser : null,
      setUser: jest.fn(),
    };

    return (
      <UserContext.Provider value={userContext}>
        <NavOptionButtons />
      </UserContext.Provider>
    );
  }

  test("[DevTest] When logged out, Login & Register option buttons in header", () => {
    render(ContextProvider(false));
    registerBtn = screen.getByTestId("nav-register-btn");
    loginBtn = screen.getByTestId("nav-login-btn");

    // option 1
    expect(registerBtn).toBeVisible();

    //option 2
    expect(loginBtn).toBeInTheDocument();
  });

  test("[DevTest] When logged in, Account & Logout option buttons in header", () => {
    render(ContextProvider(true));
    accountBtn = screen.getByTestId("nav-account-btn");
    logoutBtn = screen.getByTestId("nav-logout-btn");

    expect(accountBtn).toBeInTheDocument();
    expect(logoutBtn).toBeInTheDocument();
  });
});
