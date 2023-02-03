import { init, sendForm } from "emailjs-com";
init("PL6RvQ2mJ6MgZ7ycK");

import { SubmitHandler, useForm } from "react-hook-form";

import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = ({
    email,
    message,
    name,
    subject,
  }) => {
    if (!email || !message || !name || !subject) {
      toast.error("Alguns campos estão faltando, por favor preencha-os", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    sendForm("default_service", "template_irvv74i", "#contact-form").then(
      function (response) {
        toast.success("Email mandado com sucesso", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        toast.error("Erro ao mandar o email", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        console.log("FAILED...", error);
      }
    );
  };
  return (
    <div className="relative flex flex-col items-center max-w-6xl min-h-screen px-10 mx-auto text-center md:text-left justify-evenly">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contatos
      </h3>
      <div className="flex flex-col py-10 mt-24 md:mt-32">
        <h4 className="max-w-2xl text-3xl font-semibold text-center md:text-4xl">
          Interessado?, entre em contato e{" "}
          <span className="underline decoration-yellow-600/50">
            Vamos Conversar
          </span>
        </h4>
      </div>

      <div className="space-y-6 md:space-y-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full mx-auto space-y-2 md:w-fit"
          id="contact-form"
        >
          <div className="flex flex-col w-full gap-2 md:flex-row md:space-x-2 md:gap-0">
            <input
              {...register("name")}
              placeholder="Nome"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Assunto"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Mensagem"
            className="contactInput"
          />

          <button
            type="submit"
            className="px-10 py-5 font-bold text-black duration-200 bg-yellow-600 rounded-md hover:bg-yellow-600/40 hover:text-white"
          >
            Enviar
          </button>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </form>
      </div>
    </div>
  );
}
