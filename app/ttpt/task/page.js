import { FaTelegram, FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import Image from "next/image";

export default function Task() {
  return (
    <div className="px-8 pb-10 text-white">
      <div className="flex justify-between">
        <div className="font-bold tracking-[8%] text-sm leading-[15px]">
          COMPLETE
          <br /> TASTS
          <br /> TOEARN MORE
          <br /> POINTS AND
          <br /> INVITATION
        </div>
        <Image width={138} height={93} src="/imgs/gift.png" alt="gift.png" />
      </div>
      <div className="w-full border-2 border-[#7D4DC2] flex justify-between rounded-xl px-5">
        <div className="pt-2 pb-1">
          <div className="">Complete 6/16</div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full w-1/3"></div>
          </div>
        </div>
        <div className="px-2 pt-2 pb-1 font-semibold text-[34px] leading-[43px] border-l-2 border-[#7D4DC2] rounded-xl flex items-center">
          +200 <span className="text-[13px] leading-9 pl-2">Points</span>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex justify-between items-center">
          <div className="text-[16px] leading-[22px] bg-[#7D4DC2] rounded-[38px] px-6 py-3">
            Share Video
          </div>
          <div className="text-[16px] leading-[22px] bg-[#7D4DC2] rounded-[38px] px-6 py-3">
            Watch Video
          </div>
        </div>
        <div className=" w-full text-[16px] leading-[22px] bg-[#7D4DC2] rounded-[38px] py-3 mt-5 flex justify-center items-center">
          Watch Video
        </div>
      </div>
      <div className="mt-3">
        <div className="flex justify-center items-center">
          <div className="  px-28 rounded-[52px] text-[16px] leading-[23px] border-[0.5px] border-[#7D4DC2] flex justify-center items-center">
            task
          </div>
        </div>
        <div className="w-full mt-2 flex justify-between items-center">
          <div className="flex justify-start items-center">
            <FaXTwitter className="w-6 h-6" />
            <div className="pl-5">
              <div className="text-[15px]">Follow openex&apos;s x</div>
              <div className="text-[13px]">+50 Points</div>
            </div>
          </div>
          <div className="border-[0.5px] border-[#7D4DC2] px-6 py-1 rounded-md">
            Start
          </div>
        </div>
        <div className="w-full mt-2 flex justify-between items-center">
          <div className="flex justify-start items-center">
            <FaDiscord className="w-6 h-6" />
            <div className="pl-5">
              <div className="text-[15px]">Join openex&apos;s Discord</div>
              <div className="text-[13px]">+50 Points</div>
            </div>
          </div>
          <div className="border-[0.5px] border-[#7D4DC2] px-6 py-1 rounded-md">
            Start
          </div>
        </div>
        <div className="w-full mt-2 flex justify-between items-center">
          <div className="flex justify-start items-center">
            <BiLogoTelegram className="w-6 h-6" />
            <div className="pl-5">
              <div className="text-[15px]">Join openex&apos;s Telegram</div>
              <div className="text-[13px]">+50 Points</div>
            </div>
          </div>
          <div className="border-[0.5px] border-[#7D4DC2] px-6 py-1 rounded-md">
            Start
          </div>
        </div>
        <div className="w-full mt-2 flex justify-between items-center">
          <div className="flex justify-start items-center">
            <Image
              className="w-6 h-6"
              width={24}
              height={24}
              src="/imgs/logo1.png"
              alt="logo1.png"
            />
            <div className="pl-5">
              <div className="text-[15px]">View openex&apos;s website</div>
              <div className="text-[13px]">+50 Points</div>
            </div>
          </div>
          <div className="border-[0.5px] border-[#7D4DC2] px-6 py-1 rounded-md">
            Start
          </div>
        </div>
      </div>
    </div>
  );
}
