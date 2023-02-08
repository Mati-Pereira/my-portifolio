import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header component", () => {
  it("renders correctly", () => {
    render(<Header />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByText("Entre em contato")).toBeInTheDocument();
  });
});
