import React from "react";
import { render } from "@testing-library/react";
import Hero from "../Hero";

test("renders hero component with buttons", () => {
  const { getByText } = render(<Hero />);
  const buttonElement = getByText(/Sobre/i);
  expect(buttonElement).toBeInTheDocument();

  const buttonElement2 = getByText(/Habilidades/i);
  expect(buttonElement2).toBeInTheDocument();

  const buttonElement3 = getByText(/Projetos/i);
  expect(buttonElement3).toBeInTheDocument();
});
