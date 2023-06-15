import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="flex flex-col items-center max-w-6xl min-h-screen px-10 mx-auto text-center lg:flex-row md:relative md:text-left justify-evenly"
    >
      <h3 className="lg:absolute lg:top-10 uppercase tracking-[20px] text-gray-500 text-2xl">
        {t("about.title")}
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
        src="https://github.com/Mati-Pereira.png"
        className="md:my-10 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-xl xl:w-[300px] xl:h-[400px] "
        alt="My github picture"
      />
      <div className="px-5 space-y-10 text-justify md:px-10 lg:px-28">
        <h4 className="text-4xl font-semibold underline lg:mb-14 decoration-yellow-700 ">
          {t("about.subtitle")}
        </h4>
        <p className="text-md justify sm:text-base ">
          {t("about.description.paragraph1")}
        </p>
        <p className="text-md justify sm:text-base ">
          {t("about.description.paragraph2")}
          <span className="font-bold underline decoration-yellow-700">
            {t("about.description.span")}
          </span>
        </p>
      </div>
    </motion.div>
  );
}
