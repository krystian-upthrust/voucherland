import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import LoginPage from "../../pages/Login/LoginPage";
import userEvent from "@testing-library/user-event";

// setting up a mock-navigation for testing
const mockedNavigator = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
}));

describe("[DevTest] Testing LoginPage", () => {
  let passwordInput: HTMLInputElement;
  let emailInput: HTMLInputElement;
  let checkboxInput: HTMLInputElement;
  let loginBtn: HTMLButtonElement;
  let registerBtn: HTMLButtonElement;
  let gobackBtn: HTMLButtonElement;

  beforeEach(() => {
    render(<LoginPage />);

    emailInput = screen.getByTestId("login-email-input");
    passwordInput = screen.getByTestId("login-password-input");
    checkboxInput = screen.getByTestId("login-remember-checkbox");
    loginBtn = screen.getByTestId("login-login-btn");
    registerBtn = screen.getByTestId("login-register-btn");
    gobackBtn = screen.getByTestId("login-goback-btn");
  });

  afterEach(() => {
    cleanup();
  });

  test("[DevTest] Buttons render with correct names", () => {
    expect(loginBtn).toHaveTextContent("login");
    expect(registerBtn).toHaveTextContent("register");
    expect(gobackBtn).toHaveTextContent("go back");
  });

  test("[DevTest] Inputs render with correct placeholders", () => {
    expect(emailInput.placeholder).toBe("email");
    expect(passwordInput.placeholder).toBe("password");
  });

  test("[DevTest] Checkbox unchecked on render", () => {
    expect(checkboxInput).not.toBeChecked();
  });

  test("[DevTest] Checkbox checked on click", () => {
    fireEvent.click(checkboxInput);

    expect(checkboxInput).toBeChecked();
  });

  test("[DevTest] Login button disabled on render", () => {
    expect(loginBtn.disabled).toEqual(true);
  });

  test("[DevTest] Login button disabled if one input empty", async () => {
    fireEvent.change(emailInput, {
      target: {
        value: "jane.doe@gmail.com",
      },
    });

    expect(loginBtn.disabled).toEqual(true);
  });

  test("[DevTest] Login button enabled after filled in inputs", async () => {
    fireEvent.change(emailInput, {
      target: {
        value: "jane.doe@gmail.com",
      },
    });
    fireEvent.change(passwordInput, {
      target: {
        value: "janedoe",
      },
    });

    expect(loginBtn.disabled).toEqual(false);
  });

  test("[DevTest] Inputs focus when clicked", () => {
    userEvent.click(emailInput);
    expect(emailInput).toHaveFocus();

    userEvent.click(passwordInput);
    expect(passwordInput).toHaveFocus();
  });
});
