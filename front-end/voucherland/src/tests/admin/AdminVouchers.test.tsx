import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import AdminVouchers from "../../pages/Admin/AdminVouchers";

// setting up a mock-navigation for testing
const mockedNavigator: jest.Mock<any, any> = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
}));

test("[DevTest] Components render correctly", () => {
  render(<AdminVouchers />);

  let parent = screen.getByTestId("adminvouchers");
  let adminNav = screen.getByTestId("adminnav");
  let pageheader = screen.getByTestId('pageheader');
  let searchbar = screen.getByTestId('searchbar');

  expect(parent).toContainElement(adminNav);
  expect(parent).toContainElement(pageheader);
  expect(parent).toContainElement(searchbar);
});

