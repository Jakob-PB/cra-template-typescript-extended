import React from "react";
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders prop correctly", () => {
  render(<Greeting name={"Jakob"} />);
  const text = screen.getByText(/Jakob/i);
  expect(text).toBeInTheDocument();
});
