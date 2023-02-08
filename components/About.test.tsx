import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About component", () => {
  it("renders the header text", () => {
    render(<About />);
    expect(screen.getByText("Sobre")).toBeInTheDocument();
  });

  it("renders the image", () => {
    render(<About />);
    expect(screen.getByAltText("My github picture")).toBeInTheDocument();
  });

  it("renders the history text", () => {
    render(<About />);
    expect(screen.getByText("Minha História")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Olá, como vai? Meu nome é Matheus Rodrigues Pereira e agradeço por dedicar seu tempo para olhar este portfólio. Tenho 25 anos e atualmente estou desempregado. Sou formado em Engenharia Elétrica pela Universidade Vale do Rio Doce, no ano de 2019."
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Programação sempre foi uma paixão minha, desde a faculdade, sempre pensei em conectar meus conhecimentos com novas tecnologias, foi e é algo muito instintivo para mim. Dedico-me de corpo e alma para realizar o meu sonho de ser um"
      )
    ).toBeInTheDocument();
  });

  it("renders the profession text", () => {
    render(<About />);
    expect(screen.getByText("Front-end Web Developer.")).toBeInTheDocument();
  });
});
