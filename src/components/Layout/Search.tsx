import Image from "next/image";
import React from "react";

type Props = {};

export default function Search({}: Props) {
  return (
    <div className="flex justify-between mb-[27px] ">
      <h3 className="text-[24px] font-[Poppins]">Dua Page</h3>
      <div>
        <div className="relative rounded-md shadow-sm w-[371px]">
          <input
            type="text"
            name="search"
            id="search"
            className="block rounded-[10px] p-[4px] pl-[16px] placeholder:text-[#868686] focus:ring-[#F3F4F6] sm:text-sm font-[Inter] w-[371px] h-[44px] border-[0.5px] border-[#E2E2E2]"
            placeholder="Search by Dua Name"
          />
          <div className="absolute inset-y-0 right-0 flex items-center justify-center ">
            <button
              id="searchicon"
              name="searchicon"
              className="border-0 bg-[#F3F4F6] rounded-[6px] focus:ring-2 focus:ring-inset sm:text-sm py-[6px] px-[15px] mt-[4px] mr-[4px] mb-[4px]"
            >
              <Image
                alt="icon"
                width={24}
                height={24}
                src={"/assets/icons/search.svg"}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}