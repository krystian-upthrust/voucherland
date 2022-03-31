import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import PageHeader from "../../components/Admin/PageHeader";

describe("[DevTest] <PageHeader />", () => {
  let title: string = "Test";
  let createTitle: string = "Create Test";
  let createBtn: HTMLButtonElement;
  let deleteBtn: HTMLButtonElement;

  beforeEach(() => {
    render(
      <PageHeader
        pageTitle={title}
        createTitle={createTitle}
        handleCreatePressed={jest.fn()}
        handleDeletePressed={jest.fn()}
      />
    );

    createBtn = screen.getByTestId('pageheader-create-btn');
    deleteBtn = screen.getByTestId('pageheader-delete-btn');
  });

  test("Elements render correctly", () => {
      let parent = screen.getByTestId('pageheader');

      expect(parent).toContainElement(createBtn);
      expect(parent).toContainElement(deleteBtn);
  });

  test('Buttons render with correct names', () => { 
    
   });
});
