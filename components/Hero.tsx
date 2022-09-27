import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"

export default function Hero(): JSX.Element {
  const [text, count] = useTypewriter({
    words:
      [
        "Hi, My Name is Matheus",
        "I'm a React Developer",
        "Nice to meet you",
        "I Love Dogs"
      ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor=" #5E8874" />
      </h1>
    </div>
  )
}

