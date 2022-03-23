import { render, screen } from "@testing-library/react";
import LoginPage from "../pages/LoginPage/LoginPage";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

const mockedNavigator = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
}));const mockedNavigator = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
}));

describe("Testing Login Button", () => {
  const setup = () => render(<LoginPage />);

  test("Button disabled on start", async () => {
    setup();

    expect(
      await screen.findByRole("button", { name: /login/i })
    ).toBeDisabled();
  });

  test("Button enabled on enter email and password", async () => {
    setup();

    userEvent.type(screen.getByPlaceholderText("email"), "jane.doe@gmail.com");
    userEvent.type(screen.getByPlaceholderText("password"), "jane.doe");

    expect(await screen.findByRole("button", { name: /login/i })).toBeEnabled();
  });
});


