import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { useTranslation } from "next-i18next";

export default function Hero() {
  const { t } = useTranslation();
  const [text, _] = useTypewriter({
    words: [
      t("hero.words.phrase1"),
      t("hero.words.phrase2"),
      t("hero.words.phrase3"),
      t("hero.words.phrase4"),
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8 overflow-y-hidden text-center">
      <BackgroundCircles />
      <img
        className="w-32 h-32 mx-auto rounded-full"
        src="https://github.com/Mati-Pereira.png"
        alt="profile-picture"
      />
      <div>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[12px]">
          {t("hero.title")}
        </h2>
        <div className="flex justify-center items-center h-[200px]">
          <h1 className="px-10 text-5xl font-semibold lg:text-6xl">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor=" #5E8874" />
          </h1>
        </div>
        <div className="pt-5 pb-10">
          <Link href="#about" className="scroll-smooth">
            <button className="heroButton">{t("hero.about")}</button>
          </Link>
          <Link href="#skills" className="scroll-smooth">
            <button className="heroButton">{t("hero.habilities")}</button>
          </Link>
          <Link href="#projects" className="scroll-smooth">
            <button className="heroButton">{t("hero.projects")}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
