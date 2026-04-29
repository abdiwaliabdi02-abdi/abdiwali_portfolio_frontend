import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio text", () => {
  render(<App />);
  const text = screen.getByText(/portfolio/i);
  expect(text).toBeInTheDocument();
});
