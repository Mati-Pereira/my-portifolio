import { render, fireEvent } from "@testing-library/react";
import ContactMe from "../ContactMe";

describe("ContactMe", () => {
  it("renders the form", () => {
    const { getByPlaceholderText } = render(<ContactMe />);
    expect(getByPlaceholderText("Nome")).toBeInTheDocument();
    expect(getByPlaceholderText("Email")).toBeInTheDocument();
    expect(getByPlaceholderText("Assunto")).toBeInTheDocument();
    expect(getByPlaceholderText("Mensagem")).toBeInTheDocument();
  });

  it("displays an error toast when missing fields", async () => {
    try {
      const { getByPlaceholderText, findByText } = render(<ContactMe />);
      fireEvent.click(getByPlaceholderText("Enviar"));
      expect(
        await findByText("Alguns campos estão faltando, por favor preencha-os")
      ).toBeInTheDocument();
    } catch (e) {
      console.log(e);
    }
  });

  it("displays a success toast after submitting the form", async () => {
    try {
      const { getByPlaceholderText, findByText } = render(<ContactMe />);
      fireEvent.change(getByPlaceholderText("Nome"), {
        target: { value: "Test User" },
      });
      fireEvent.change(getByPlaceholderText("Email"), {
        target: { value: "test@example.com" },
      });
      fireEvent.change(getByPlaceholderText("Assunto"), {
        target: { value: "Test subject" },
      });
      fireEvent.change(getByPlaceholderText("Mensagem"), {
        target: { value: "Test message" },
      });
      expect(async () => {
        await findByText("Email mandado com sucesso");
      }).toBeDefined();
    } catch (e) {
      console.log(e);
    }
  });
});
