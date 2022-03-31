import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import AddTag from "../../components/Admin/Articles/AddTag/AddTag";
import AddTagForm from "../../components/Admin/Articles/AddTag/AddTagForm";

// setting up a mock-navigation for testing
const mockedNavigator: jest.Mock<any, any> = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
}));

describe("[DevTest] <AddTag />", () => {
  test("Elements render correctly", () => {
    render(
      <AddTag handleAddPressed={jest.fn()} handleCancelPressed={jest.fn()} />
    );

    let parent = screen.getByTestId("addtag");

    expect(parent).toContainElement(screen.getByTestId("addtag-form"));
    expect(parent).toContainElement(screen.getByTestId("addtag-title"));
  });
});

describe("[DevTest] <AddTagFrom />", () => {
  let nameInput: HTMLInputElement;
  let colorSelect: HTMLElement;
  let cancelBtn: HTMLButtonElement;
  let addBtn: HTMLButtonElement;

  beforeEach(() => {
    render(
      <AddTagForm
        handleAddPressed={jest.fn()}
        handleCancelPressed={jest.fn()}
      />
    );

    nameInput = screen.getByTestId("addtag-name-input");
    colorSelect = screen.getByTestId("addtag-color-select");
    cancelBtn = screen.getByTestId("addtag-cancel-btn");
    addBtn = screen.getByTestId("addtag-add-btn");
  });

  test("Elements render correctly", () => {
    let parent = screen.getByTestId("addtag-form");

    expect(parent).toContainElement(nameInput);
    expect(parent).toContainElement(colorSelect);
    expect(parent).toContainElement(cancelBtn);
    expect(parent).toContainElement(addBtn);
  });

  test("Labels contain the correct names", () => {
    expect(screen.getByTestId("addtag-name-label")).toHaveTextContent("name");
    expect(screen.getByTestId("addtag-color-label")).toHaveTextContent("color");
  });

  test("Name input renders with correct placeholder", () => {
    expect(nameInput.placeholder).toBe("name");
  });

  test("Buttons render with correct names", () => {
    expect(cancelBtn).toHaveTextContent("cancel");
    expect(addBtn).toHaveTextContent("add tag");
  });
});
