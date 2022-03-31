import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import NewVoucher from "../../components/Admin/Vouchers/NewVoucher/NewVoucher";
import VoucherForm from "../../components/Admin/Vouchers/NewVoucher/VoucherForm";
import AsideInformation from "../../components/Admin/Vouchers/NewVoucher/AsideInformation";

// setting up a mock-navigation for testing
const mockedNavigator: jest.Mock<any, any> = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
}));

test("[DevTest] Components render correctly in <NewVoucher />", () => {
  render(<NewVoucher />);

  let parent = screen.getByTestId("newvoucher");

  expect(parent).toContainElement(screen.getByTestId("adminnav"));
  expect(parent).toContainElement(screen.getByTestId("voucherform"));
  expect(parent).toContainElement(screen.getByTestId("asideinformation"));
});

describe("[DevTest] <VoucherFrom />", () => {
  let brand: HTMLElement;
  let preview: HTMLElement;
  let state: HTMLElement;
  let productName: HTMLElement;
  let expiry: HTMLElement;
  let productImage: HTMLElement;
  let discount: HTMLElement;
  let precentage: HTMLElement;
  let pieces: HTMLElement;
  let code: HTMLElement;
  let description: HTMLElement;

  beforeEach(() => {
    render(<VoucherForm />);

    brand = screen.getByTestId("voucherform-brand");
    preview = screen.getByTestId("voucherform-preview");
    state = screen.getByTestId("voucherform-state");
    productName = screen.getByTestId("voucherform-productname");
    expiry = screen.getByTestId("voucherform-expiry");
    productImage = screen.getByTestId("voucherform-productimage");
    discount = screen.getByTestId("voucherform-discount");
    precentage = screen.getByTestId("voucherform-precentage");
    pieces = screen.getByTestId("voucherform-pieces");
    code = screen.getByTestId("voucherform-code");
    description = screen.getByTestId("voucherform-description");
  });

  test("Elements render correct in form", () => {
    let parent = screen.getByTestId("voucherform");

    expect(parent).toContainElement(brand);
    expect(parent).toContainElement(preview);
    expect(parent).toContainElement(state);
    expect(parent).toContainElement(productName);
    expect(parent).toContainElement(expiry);
    expect(parent).toContainElement(productImage);
    expect(parent).toContainElement(discount);
    expect(parent).toContainElement(precentage);
    expect(parent).toContainElement(pieces);
    expect(parent).toContainElement(code);
    expect(parent).toContainElement(description);
  });
});
