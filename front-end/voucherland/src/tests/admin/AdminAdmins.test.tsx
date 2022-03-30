import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import AdminAdmins from "../../pages/Admin/AdminAdmins";

// setting up a mock-navigation for testing
const mockedNavigator: jest.Mock<any, any> = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
}));

test("[DevTest] Components render correctly", () => {
  render(<AdminAdmins />);

  let parent = screen.getByTestId("adminadmins");
  let adminNav = screen.getByTestId("adminnav");
  let pageheader = screen.getByTestId('pageheader');

  expect(parent).toContainElement(adminNav);
  expect(parent).toContainElement(pageheader);
});

