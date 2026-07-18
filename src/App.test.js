import { render, screen } from "@testing-library/react";
import App from "./App";

beforeAll(() => {
  // Plain stubs (not jest.fn) — CRA's resetMocks would wipe mock implementations
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    addEventListener: () => {},
    removeEventListener: () => {},
  });
  window.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

test("renders the hero with name and role", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { level: 1, name: /Bùi Viết Quyền/ })
  ).toBeInTheDocument();
});

test("renders the contact email link", () => {
  render(<App />);
  expect(
    screen.getByRole("link", { name: /quyenbuiviet45@gmail.com/ })
  ).toBeInTheDocument();
});
