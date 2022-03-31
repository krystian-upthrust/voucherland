import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Searchbar from "../../components/Admin/Searchbar";

// setting up a mock-navigation for testing
const mockedNavigator: jest.Mock<any, any> = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
}));

test("[DevTest] Input renders with the correct placeholder", () => {
  let handleSearch = jest.fn();
  let handleExit = jest.fn();

  render(<Searchbar handleExit={handleExit} handleSearch={handleSearch} />);

  let searchInput: HTMLInputElement = screen.getByTestId("searchbar-input");

  expect(searchInput.placeholder).toHaveTextContent("Search...");
});
