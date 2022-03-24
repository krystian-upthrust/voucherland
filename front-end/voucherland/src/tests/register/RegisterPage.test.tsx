import React from "react";
import { fireEvent, render, RenderResult } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import RegisterPage from "../../pages/Register/RegisterPage";
import userEvent from "@testing-library/user-event";

// setting up a mock-navigation for testing
const mockedNavigator = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
}));

describe("[DevTest] Testing RegisterPage", () => {
  let testID: any;

  let nameInput: HTMLInputElement;
  let emailInput: HTMLInputElement;
  let passwordInput: HTMLInputElement;
  let confirmPasswordInput: HTMLInputElement;
  let loginBtn: HTMLButtonElement;
  let registerBtn: HTMLButtonElement;
  let gobackBtn: HTMLButtonElement;

  beforeEach(() => {
    const component = render(<RegisterPage />);
    testID = component.getByTestId;

    nameInput = testID("register-name-input");
    emailInput = testID("register-email-input");
    passwordInput = testID("register-password-input");
    confirmPasswordInput = testID("register-confirmpassword-input");
    loginBtn = testID("register-login-btn");
    registerBtn = testID("register-register-btn");
    gobackBtn = testID("register-goback-btn");
  });

  // additional test : test if next input is on focus if user pressed TAB
  // second additional test : test if input focus on click

  test("[DevTest] Buttons render with correct names", () => {
    expect(loginBtn).toHaveTextContent("login");
    expect(registerBtn).toHaveTextContent("register");
    expect(gobackBtn).toHaveTextContent("go back");
  });

  test("[DevTest] Inputs render with correct placeholder name", () => {
    expect(nameInput.placeholder).toBe("name");
    expect(emailInput.placeholder).toBe("email");
    expect(passwordInput.placeholder).toBe("password");
    expect(confirmPasswordInput.placeholder).toBe("confirm password");
  });

  test("[DevTest] Register button is disabled on render", () => {
    expect(registerBtn.disabled).toEqual(true);
  });

  test("[DevTest] Register button is disable when 1 input is still empty", () => {
    fireEvent.change(nameInput, {
      target: {
        value: "jane doe",
      },
    });
    fireEvent.change(emailInput, {
      target: {
        value: "jane.doe@email.com",
      },
    });
    fireEvent.change(passwordInput, {
      target: {
        value: "janedoe",
      },
    });

    expect(registerBtn.disabled).toEqual(true);
  });

  test("[DevTest] Register button is enabled when inputs are filled in", () => {
    fireEvent.change(nameInput, {
      target: {
        value: "jane doe",
      },
    });
    fireEvent.change(emailInput, {
      target: {
        value: "jane.doe@email.com",
      },
    });
    fireEvent.change(passwordInput, {
      target: {
        value: "janedoe",
      },
    });
    fireEvent.change(confirmPasswordInput, {
      target: {
        value: "janedoe",
      },
    });

    expect(registerBtn.disabled).toEqual(false);
  });

  test("[DevTest] Inputs are focused on click", () => {
    userEvent.click(nameInput);
    expect(nameInput).toHaveFocus();

    userEvent.click(emailInput);
    expect(emailInput).toHaveFocus();

    userEvent.click(passwordInput);
    expect(passwordInput).toHaveFocus();

    userEvent.click(confirmPasswordInput);
    expect(confirmPasswordInput).toHaveFocus();
  });

  test("[DevTest] Next input on focus when pressed tab", () => {
    userEvent.type(nameInput, "Jane Doe");
    userEvent.tab();

    // next input in the form
    expect(emailInput).toHaveFocus();
  });
});
