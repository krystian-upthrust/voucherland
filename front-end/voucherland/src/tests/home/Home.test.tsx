import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// importing the to-be tested components
import Home from "../../pages/Home/Home";
import TopDeals from "../../components/Home/TopDeals";
import { IArticle, IUser, IUserContext, IVoucher } from "../../utils/types";
import { UserContext } from "../../utils/context/UserContext";
import RecentArticles from "../../components/Home/RecentArticles";

// setting up a mock-navigation for testing
const mockedNavigator: jest.Mock<any, any> = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
}));

// What to test?
test("[DevTest] Renders components correctly", () => {
  render(<Home />);

  let parent = screen.getByTestId("home");

  expect(parent).toContainElement(screen.getByTestId("header"));
  expect(parent).toContainElement(screen.getByTestId("home-banner"));
  expect(parent).toContainElement(screen.getByTestId("home-deal-advantages"));
  expect(parent).toContainElement(screen.getByTestId("collaboration"));
  expect(parent).toContainElement(screen.getByTestId("home-statistics"));
  expect(parent).toContainElement(screen.getByTestId("footer"));
});

describe("[DevTest] <TopDeals />", () => {
  let vouchers: IVoucher[] = [];

  function ContextProvider(loginStatus: boolean): JSX.Element {
    let testUser: IUser = {
      firstname: "jane",
      lastname: "doe",
      email: "jane@gmail.com",
      password: "jane123",
      is_admin: true,
    };

    let userContext: IUserContext = {
      loggedIn: loginStatus,
      setLoggedIn: jest.fn(),
      user: loginStatus ? testUser : null,
      setUser: jest.fn(),
    };

    return (
      <UserContext.Provider value={userContext}>
        <TopDeals />
      </UserContext.Provider>
    );
  }

  test("Buttons render with correct names", () => {
    render(<TopDeals />);
    let vouchersBtn = screen.getByTestId("topdeals-vouchers-btn");
    expect(vouchersBtn).toHaveTextContent("View all vouchers");
  });

  test("When logged out, login-popup present in the document", () => {
    render(ContextProvider(false));
    let loginPopup: HTMLElement = screen.getByTestId("topdeals-login-popup");

    expect(loginPopup).toBeInTheDocument();
  });
});

describe("[DevTest] <RecentArticles /> ", () => {
  let articles: IArticle[] = [];
  let articlesBtn: HTMLButtonElement;

  beforeEach(() => {
    render(<RecentArticles  />);

    articlesBtn = screen.getByTestId("recentarticles-articele-btn");
  });

  test("Button renders with correct name", () => {
    expect(articlesBtn).toHaveTextContent("View all articles");
  });
});
