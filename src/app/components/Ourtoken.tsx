import Image from "next/image";
import React from "react";
import vectorLine from "../../Asset/VectorLineYellow.png";
import bitLogo from "../../Asset/BitLogo.png";
import { TokenCard } from "./TokenCard";
import { HeadingSnip } from "./HeadingSnip";

export const Ourtoken = () => {
  return (
    <div className=" mt-28 scroll-animation">
         <div className="w-3/4 m-auto  ">
      <HeadingSnip title="Tokens" vectorLine={vectorLine} />
      <div className="main flex flex-wrap mt-8 m-auto justify-center">
        <TokenCard />
        <TokenCard />
        <TokenCard />
        <TokenCard />
        <TokenCard />
        <TokenCard />
        <TokenCard />
        <TokenCard />
      </div>
      <div className=" flex justify-center p-5 mt-9 ">
        <div className=" w-full flex justify-center">
          <button className="rounded-lg bg-black text-white mx-5 px-3">Previous</button>
          <p className="mx-4 text-sm text-white">Page 1 of 3</p>
          <button className="rounded-lg bg-black text-white mx-5 px-3">Next</button>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
    </div>
   
  );
};
