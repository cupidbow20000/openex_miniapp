import Link from "next/link";
import { MdOutlineAddAPhoto } from "react-icons/md";

export default function Create() {
  return (
    <div className="flex flex-col items-center space-y-20 p-8">
      <div className="relative">
        <div className="w-32 h-32 rounded-full bg-[#d9d9d9]"></div>
        <div className="bg-black p-2 w-10 h-10 rounded-full flex justify-center items-center absolute bottom-1 right-1 hover:cursor-pointer">
          <MdOutlineAddAPhoto className="w-8 h-8 text-white" />
        </div>
      </div>
      <div className="w-full">
        <div className="font-semibold text-xl text-white">NickName</div>
        <input
          type="text"
          placeholder="@enter your name"
          className="w-full text-sm leading-10 text-white bg-[#021E45] border-2 border-[#5A409E] rounded-lg p-3 focus:outline-none"
        />
      </div>
      <Link
        href="/ttpt/ttpthome"
        className="mt-12 font-semibold text-[17px] text-white flex justify-center items-center w-full py-5 bg-gradient-to-r from-[#7D4DC2] to-[#008AD8] shadow-md rounded-lg hover:curpointer active:shadow-none"
      >
        Continue
      </Link>
    </div>
  );
}
