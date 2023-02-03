import { motion } from "framer-motion";

type Props = {
  src: string;
  percentage: string;
};

export default function Skill({ src, percentage }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: 200,
          opacity: 0,
        }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1 }}
        src={src}
        className="rounded-3xl border border-gray-500 object-cover h-24 w-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out "
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:w-32 xl:h-32 rounded-3xl z-0 ">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {percentage}
          </p>
        </div>
      </div>
    </div>
  );
}
