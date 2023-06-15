import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { useTranslation } from "next-i18next";
import Link from "next/link";

function Header() {
  const { t } = useTranslation();
  return (
    <header className="sticky top-0 z-20 flex items-start justify-between max-w-6xl p-5 mx-auto items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >
        <SocialIcon
          className="hover:animate-pulse"
          target="_blank"
          network="github"
          url="https://github.com/mati-pereira"
          bgColor="transparent"
          fgColor="gray"
          id="github"
        />
        <SocialIcon
          className="hover:animate-pulse"
          target="_blank"
          network="linkedin"
          url="https://www.linkedin.com/in/matheus-rodrigues-pereira/"
          bgColor="transparent"
          fgColor="gray"
        />
      </motion.div>
      <motion.div
        initial={{
          y: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >
        <Link
          href={"/"}
          locale="en"
          className="text-gray-300 cursor-pointer hover:animate-pulse"
        >
          {t("header.en")}
        </Link>
        <span> | </span>
        <Link
          href={"/"}
          locale="pt"
          className="text-gray-300 cursor-pointer hover:animate-pulse"
        >
          {t("header.pt")}
        </Link>
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="flex flex-row gap-2 items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="hover:animate-pulse"
          target="_blank"
          network="email"
          url="mailto:matheus-rodrigues37@live.com"
          bgColor="transparent"
          fgColor="gray"
        />
        <p className="hidden text-sm text-gray-400 uppercase md:inline-flex">
          {t("header.info")}
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
