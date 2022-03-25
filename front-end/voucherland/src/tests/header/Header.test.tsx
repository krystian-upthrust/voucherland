import React from "react";
// Renders pages/componennts in an virtual DOM in order to run the tests
import { render, screen } from "@testing-library/react";
// this import allows the usage of keywoord expect
import "@testing-library/jest-dom/extend-expect";

// importing the to-be tested components
import Header from "../../components/Header/Header";
import Nav from "../../components/Header/Nav";

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
  const setup = () => render(<Nav />);

  test("[DevTest] Desktop header renders with correct title", () => {
    setup();
    const headerElement = screen.getByTestId("desktop-header");

    // using option 1 [see above] ... testing if h1 element content is correct
    expect(headerElement).toHaveTextContent("voucherland");
  });

  test("[DevTest] Navigation renders with correct list items", () => {
    setup();

    const homeItem = screen.getByTestId("list-item-home"),
      vouchersItem = screen.getByTestId("list-item-vouchers"),
      articlesItem = screen.getByTestId("list-item-articles"),
      contactItem = screen.getByTestId("list-item-contact");

    expect(homeItem).toHaveTextContent("Home");
    expect(vouchersItem).toHaveTextContent("Vouchers");
    expect(articlesItem).toHaveTextContent("Articles");
    expect(contactItem).toHaveTextContent("Contact");
  });

  test("[DevTest] Register/login buttons are visible at render", () => {
    setup();

    const registerBtn = screen.getByTestId("nav-register-btn");
    const loginBtn = screen.getByTestId("nav-login-btn");

    // option 1
    expect(registerBtn).toBeVisible();

    //option 2
    expect(loginBtn).toBeInTheDocument();
  });
});
