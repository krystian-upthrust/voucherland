import React from "react";
// Renders pages/componennts in an virtual DOM in order to run the tests
import {
  Matcher,
  MatcherOptions,
  render,
  RenderResult,
} from "@testing-library/react";
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
  const { getByTestId } = render(<Header />);
  const headerElement: HTMLElement = getByTestId("mobile-header");

  // option 1 is to use textContent to get the text inside h1
  expect(headerElement.textContent).toBe("voucherland");

  // option 2 is to use toHaveTextContent functions
  expect(headerElement).toHaveTextContent("voucherland");
});

describe("[DevTest] Testing <Nav/> Component", () => {
  let testID: any;

  beforeEach(() => {
    // Setting up tested component
    const component = render(<Nav />);
    testID = component.getByTestId;
  });

  test("[DevTest] Desktop header renders with correct title", () => {
    const headerElement = testID("desktop-header");

    // using option 1 [see above] ... testing if h1 element content is correct
    expect(headerElement.textContent).toBe("voucherland");
  });

  test("[DevTest] Navigation renders with correct list items", () => {
    const homeItem = testID("list-item-home"),
      vouchersItem = testID("list-item-vouchers"),
      articlesItem = testID("list-item-articles"),
      contactItem = testID("list-item-contact");

    expect(homeItem).toHaveTextContent("Home");
    expect(vouchersItem).toHaveTextContent("Vouchers");
    expect(articlesItem).toHaveTextContent("Articles");
    expect(contactItem).toHaveTextContent("Contact");
  });

  test("[DevTest] Register/login buttons are visible at render", () => {
    const registerBtn = testID("nav-register-btn");
    const loginBtn = testID("nav-login-btn");

    // option 1
    expect(registerBtn).toBeVisible();

    //option 2
    expect(loginBtn).toBeInTheDocument();
  });
  
});

test('[DevTest] Visible account/logout button after login', () => {
  // const accountBtn = testID("nav-account-btn"),
  //   logout = testID("nav-logout-btn");

  const wrapper =  jest.spyOn(React, "useState");
  wrapper.mockImplementation()

});
