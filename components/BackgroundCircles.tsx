import React from "react";

type Props = {};

export default function BackgroundCircles({}: Props): JSX.Element {
  return (
    <div className="relative flex items-center justify-center overflow-hidden animate-pulse">
      <div className="absolute border border-gray-700 h-[300px] w-[300px] rounded-full mt-64 animate-pulse -z-20" />
      <div className="absolute border border-[#332e44] h-[500px] w-[500px] rounded-full mt-64 -z-20" />
      <div className="absolute border border-[#4b5f15] h-[650px] w-[650px] rounded-full mt-64 animate-pulse -z-20" />
      <div className="absolute border border-[#200d0d] h-[800px] w-[800px] rounded-full mt-64 -z-20" />
    </div>
  );
}
