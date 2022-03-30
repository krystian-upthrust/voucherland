import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import AdminNav from "../../components/Admin/AdminNav";

// setting up a mock-navigation for testing
const mockedNavigator: jest.Mock<any, any> = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
}));

describe("[DevTest] <AdminNav />", () => {
  let vouchers: HTMLLIElement;
  let articles: HTMLLIElement;
  let admins: HTMLLIElement;
  let logoutBtn: HTMLButtonElement;

  beforeEach(() => {
    render(<AdminNav />);

    vouchers = screen.getByTestId("adminnav-vouchers");
    articles = screen.getByTestId("adminnav-articles");
    admins = screen.getByTestId("adminnav-admins");
    logoutBtn = screen.getByTestId("adminnav-logout-btn");
  });

  test("Elements render correctly", () => {
    expect(vouchers).toBeInTheDocument();
    expect(articles).toBeInTheDocument();
    expect(admins).toBeInTheDocument();
    expect(logoutBtn).toBeInTheDocument();
  });

  test("Nav items render with correct names", () => {
    expect(vouchers).toHaveTextContent("Vouchers");
    expect(articles).toHaveTextContent("Articles");
    expect(admins).toHaveTextContent("Admins");
  });

  test("Logout button renders with the correct name", () => {
    expect(logoutBtn).toHaveTextContent("Log out");
  });
});
