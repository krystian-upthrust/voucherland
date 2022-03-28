import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// importing the to-be tested components
import ContactPage from "../../pages/Contact/ContactPage";
import ContactForm from "../../components/Contact/ContactForm";

// setting up a mock-navigation for testing
const mockedNavigator: jest.Mock<any, any> = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
}));

test("[DevTest] Renders child components", () => {
  // should you test if children components render?

  render(<ContactPage />);

  let parent: HTMLElement = screen.getByTestId("contactpage");
  let header: HTMLElement = screen.getByTestId("contact-header");
  let information: HTMLElement = screen.getByTestId("contact-information");
  let form: HTMLElement = screen.getByTestId("contact-form");
  let office: HTMLElement = screen.getByTestId("contact-office");

  expect(parent).toContainElement(header);
  expect(parent).toContainElement(information);
  expect(parent).toContainElement(form);
  expect(parent).toContainElement(office);
});

describe("[DevTest] Testing <ContactForm />", () => {
    let form : HTMLFormElement;
  let nameInput: HTMLInputElement;
  let emailInput: HTMLInputElement;
  let phoneInput: HTMLInputElement;
  let subjectInput: HTMLInputElement;
  let messageInput: HTMLTextAreaElement;
  let submitBtn: HTMLButtonElement;

  beforeEach(() => {
    render(<ContactForm />);

    form = screen.getByTestId('contact-form');
    nameInput = screen.getByTestId("contact-form-name");
    emailInput = screen.getByTestId("contact-form-email");
    phoneInput = screen.getByTestId("contact-form-phone");
    subjectInput = screen.getByTestId("contact-form-subject");
    messageInput = screen.getByTestId("contact-form-message");
    submitBtn = screen.getByTestId("contact-form-submit-btn");
  });

  test("Inputs renders with correct placeholders", () => {
    expect(nameInput.placeholder).toBe("Jane Doe");
    expect(emailInput.placeholder).toBe("jane.doe@upthrust.eu");
    expect(phoneInput.placeholder).toBe("0498 12 23 34");
    expect(subjectInput.placeholder).toBe("Your subject here");
    expect(messageInput.placeholder).toBe("Your message here");
  });
  // should u test labels as well?

  test("Submit button renders with correct name", () => {
    expect(submitBtn).toHaveTextContent("submit");
  });

  test("Submit button disabled on render", () => {
    expect(submitBtn.disabled).toEqual(true);
  });

  test("Submit button disabled if some inputs are empty", () => {
    fireEvent.change(nameInput, { target: { value: "jane" } });
    fireEvent.change(emailInput, { target: { value: "jane@gmail.com" } });
    fireEvent.change(phoneInput, { target: { value: "jane" } });

    expect(submitBtn.disabled).toEqual(true);
  });

  test("Submit button enabled if all inputs are filled in", () => {
    fireEvent.change(nameInput, { target: { value: "jane" } });
    fireEvent.change(emailInput, { target: { value: "jane@gmail.com" } });
    fireEvent.change(phoneInput, { target: { value: "0498 12 12 12" } });
    fireEvent.change(subjectInput, { target: { value: "Some Subject" } });
    fireEvent.change(messageInput, { target: { value: "Some Message" } });

    expect(submitBtn.disabled).toEqual(false);
  });

});
