import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import DeleteAlertMessage from "../../components/Admin/DeleteAlertMessage";

describe("[DevTest] <DeleteAlertMessage />", () => {
  let title: HTMLHeadingElement;
  let deleteBtn: HTMLButtonElement;
  let cancelBtn: HTMLButtonElement;

  beforeEach(() => {
    render(
      <DeleteAlertMessage
        deleteTitle="Test delete"
        deleteAmount="2"
        cancelPressed={jest.fn()}
        deletePressed={jest.fn()}
      />
    );

    title = screen.getByTestId("deletealertmessage-title");
    cancelBtn = screen.getByTestId("deletealertmessage-cancel-btn");
    deleteBtn = screen.getByTestId("deletealertmessage-delete-btn");
  });

  test("Elements render correctly", () => {
    let parent = screen.getByTestId("deletealertmessage");

    expect(parent).toContainElement(title);
    expect(parent).toContainElement(cancelBtn);
    expect(parent).toContainElement(deleteBtn);
  });

  test("Title renders with correct name", () => {
    expect(title).toHaveTextContent("Test delete");
  });

  test("Buttons render with correct names", () => {
    expect(cancelBtn).toHaveTextContent("cancel");
    expect(deleteBtn).toHaveTextContent("delete");
  });
});
