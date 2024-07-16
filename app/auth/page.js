import Link from "next/link";

export default function Auth() {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <div className="py-12 px-10 flex flex-col items-center">
        <img className="w-26 h-28" src="/imgs/logo.png" alt="logo.png" />
        <div className="font-semibold text-[32px] leading-[43px] text-center text-white bg-[#00204D] p-5 my-10 rounded-lg">
          Welcome to Match Quest
        </div>
      </div>
      <Link
        href="/auth/create"
        className="mt-10 font-semibold text-[17px] text-white flex justify-center items-center w-full py-5 bg-gradient-to-r from-[#7D4DC2] to-[#008AD8] shadow-md rounded-lg hover:curpointer active:shadow-none"
      >
        Create account
      </Link>
    </div>
  );
}
