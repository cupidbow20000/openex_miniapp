import Image from "next/image";

export default function User() {
  return (
    <div className="px-8 pb-12">
      <div className="font-bold text-xl leading-7 text-white">
        Invite friends to earn more Points
        <br /> Already invited 0 friend
        <div className="w-full flex justify-between border-2 border-[#7D4DC2] p-5 my-6 rounded-lg text-white">
          <div className="flex justify-start items-center">
            <div className="font-bold text-2xl leading-7">0.0000</div>
            <div className="font-semibold text-xs leading-5 pl-4">Points</div>
          </div>
          <div className="flex justify-end items-center px-5 py-1 bg-[#7D4DC2] rounded-lg text-xs leading-6">
            Claim
          </div>
        </div>
        <div className="text-white">
          <div className="my-5 font-bold text-lg leading-7">My Friends</div>
          <div className="text-[13px] leading-5">
            Refer a friend and earn 10% of the points they accumulate, plus an
            additional 3% from their referrals
          </div>
          <div className="flex flex-col items-center">
            <Image
              className="w-[238px] h-[204px]"
              width={238}
              height={204}
              src="/imgs/no.png"
              alt="no.png"
            />
            <div className="font-semibold text-[#818181] text-sm leading-6">
              No friends yet
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 text-center text-lg leading-6 font-semibold text-white w-full bg-gradient-to-r from-[#7D4DC2] from-40% to-[#008BD8] to-90% p-5 rounded-lg  shadow-md">
        Invite Friends
      </div>
    </div>
  );
}
