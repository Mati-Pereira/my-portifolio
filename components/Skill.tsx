import { motion } from "framer-motion"

type Props = {
  directionsLeft?: boolean
}

export default function Skill({ directionsLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionsLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
      />
    </div>
  )
}
