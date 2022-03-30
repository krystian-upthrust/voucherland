import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import VouchersPage from "../../pages/Vouchers/VouchersPage";
import VouchersBanner from "../../components/Vouchers/VouchersBanner";

// setting up a mock-navigation for testing
const mockedNavigator: jest.Mock<any, any> = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
}));

test("[DevTest] Components renders correctly", () => {
  render(<VouchersPage />);

  let parent = screen.getByTestId("voucherspage");

  expect(parent).toContainElement(screen.getByTestId("header"));
  expect(parent).toContainElement(screen.getByTestId("vouchersbanner"));
  expect(parent).toContainElement(screen.getByTestId("collaboration"));
  expect(parent).toContainElement(screen.getByTestId("footer"));
});

describe("[DevTest] <VouchersBanner />", () => {
  let searchInput: HTMLInputElement;
  let searchBtn: HTMLButtonElement;

  beforeEach(() => {
    render(<VouchersBanner />);

    searchInput = screen.getByTestId("voucherspage-search-input");
    searchBtn = screen.getByTestId("voucherspage-search-btn");
  });

  test("All elements render correctly", () => {
    expect(searchInput).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
  });

  test("Search input renders with correct placeholder", () => {
    expect(searchInput.placeholder).toBe("Search for shop/brand");
  });

  test("Search button renders with correct name", () => {
    expect(searchBtn).toHaveTextContent("search");
  });

  test("Search button disabled on render", () => {
    expect(searchBtn.disabled).toEqual(true);
  });

  test("Search button disables when search input empty", () => {
    fireEvent.change(searchInput, { target: { value: "" } });

    expect(searchBtn.disabled).toEqual(true);
  });

  test("Search button disables when search input not empty", () => {
    fireEvent.change(searchInput, { target: { value: "AH" } });

    expect(searchBtn.disabled).toEqual(false);
  });
});
