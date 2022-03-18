import { render, screen } from "@testing-library/react";
import App from "../App";
import LoginPage from "../pages/LoginPage/LoginPage";

test("First test", () => {
  // expect returns a "expectation" object, you wont do much with it except call matchers on them.
  // mathcer like toBe, toEquel, ...
  expect(2 + 2).toBe(4);
  // toBe tests the exact equality of the tested values.
});

// If you want to test the value of an object , use toEqual.
// It check every field of an object.
test("Object testing", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

// You can also test the opposite of an matcher
test("Opposite of a matcher", () => {
  expect(1 + 1).not.toBe(0);
});

// sometimes need to distinguish between undefined, null, true and false
test("Helpers", () => {
  expect(null).toBeNull();
  expect(1).toBeDefined();
  expect(undefined).toBeUndefined();
  expect(true).toBeTruthy();
  expect(false).toBeFalsy();
});

// matchers for numbers
test("Number matchers", () => {
  const value = 2 + 2;

  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeGreaterThanOrEqual(4);

  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);
  expect(value).toBeLessThanOrEqual(4);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

// for floating points, it is beter to use toBeCloseTo insteas of toEqual or toBe
// reason being the rounding error
test("Floating point", () => {
  const value = 0.1 + 0.2;

  // This won't work because of rounding error
  //expect(value).toBe(0.3);

  // This works
  expect(value).toBeCloseTo(0.3);
});

// you can test string against regex
test("String testing", () => {
  expect("Christoph").toMatch(/stop/);
});

// testing if an array or iterables contains a item
test("Testing array contains item", () => {
  const shoppingList = ["diapers", "kleenex", "milk"];

  expect(shoppingList).toContain("milk");
  expect(new Set(shoppingList)).toContain("milk");
});

// you can also test if an fucntion throws an exception -> see https://jestjs.io/docs/expect

// ************************************************ //
// ===== Testing Asynchronous Code & Promises ===== //
// ************************************************ //

// see -> https://jestjs.io/docs/asynchronous

