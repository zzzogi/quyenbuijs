/* eslint-disable testing-library/no-container, testing-library/no-node-access -- structural checks on layout */
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

test("hero shows exactly one portrait image", () => {
  const { container } = render(<App />);
  expect(container.querySelectorAll(".portrait-frame img")).toHaveLength(1);
});

test("featured projects come first", () => {
  const { container } = render(<App />);
  const titles = [...container.querySelectorAll(".project-card--featured h3")].map(
    (h) => h.textContent
  );
  expect(titles).toEqual(["FIFA Pick'em World Cup 2026", "Internal Ringlock TP"]);
});

test("unfilled content renders as a visible placeholder, not a link", () => {
  const { container } = render(<App />);
  expect(container.querySelectorAll("mark.todo").length).toBeGreaterThan(0);
  expect(container.querySelector('a[href*="CẦN ANH"]')).toBeNull();
});

test("renders the contact email link", () => {
  render(<App />);
  expect(
    screen.getByRole("link", { name: /quyenbuiviet45@gmail.com/ })
  ).toBeInTheDocument();
});
