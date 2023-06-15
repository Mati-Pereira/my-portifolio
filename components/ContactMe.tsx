import { init, sendForm } from "emailjs-com";
init("PL6RvQ2mJ6MgZ7ycK");
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe() {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = ({
    email,
    message,
    name,
    subject,
  }) => {
    if (!email || !message || !name || !subject) {
      return toast.error(t("contact.missing-info"), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
    sendForm("default_service", "template_irvv74i", "#contact-form")
      .then(
        function () {
          return toast.success(t("contact.success-toast"), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        },
        function () {
          return toast.error(t("contact.error-toast"), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        }
      )
      .catch(function (error) {
        return toast.error(t("contact.error-toast"), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      });
  };
  return (
    <div className="relative flex flex-col items-center max-w-6xl min-h-screen px-10 mx-auto text-center md:text-left justify-evenly">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        {t("contact.title")}
      </h3>
      <div className="flex flex-col py-10 mt-24 md:mt-32">
        <h4 className="max-w-2xl text-3xl font-semibold text-center md:text-4xl">
          {t("contact.subtitle")}
          <span className="underline decoration-yellow-600/50">
            {t("contact.span")}
          </span>
        </h4>
      </div>

      <div className="space-y-6 md:space-y-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full mx-auto space-y-2 md:w-fit"
          id="contact-form"
          typeof="email"
        >
          <div className="flex flex-col w-full gap-2 md:flex-row md:space-x-2 md:gap-0">
            <input
              {...register("name")}
              placeholder={t("contact.placeholders.name")}
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder={t("contact.placeholders.email")}
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder={t("contact.placeholders.subject")}
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder={t("contact.placeholders.message")}
            className="contactInput"
          />

          <button
            className="px-10 py-5 font-bold text-black duration-200 bg-yellow-600 rounded-md hover:bg-yellow-600/40 hover:text-white"
            type="submit"
            role="button"
            id="submit"
            placeholder={t("contact.placeholders.button")}
          >
            {t("contact.button")}
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
