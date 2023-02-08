import React from "react";
import { render, screen } from "@testing-library/react";
import data from "../../data/data";
import Projects from "../Projects";

describe("Projects", () => {
  it("renders all the projects correctly", () => {
    render(<Projects />);
    data.forEach((project) => {
      expect(screen.getByText(project.name)).toBeInTheDocument();
      expect(screen.getByText(project.description)).toBeInTheDocument();
      expect(screen.getByAltText(project.description)).toHaveAttribute(
        "src",
        project.img
      );
    });
  });
});
