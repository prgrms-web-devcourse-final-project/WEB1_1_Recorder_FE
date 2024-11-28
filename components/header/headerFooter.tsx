import Link from "next/link";

type Props = object;

const HeaderFooter = ({}: Props) => {
  return (
    <div className="flex gap-[20px]">
      <input
        className="w-[300px] border-2 rounded-md border-[#CBD2E0] px-[20px] focus:outline-none"
        type="text"
        placeholder="Search"
      />
      <Link href="/login" passHref>
        <button className="border-2 rounded-md border-[#2D3648] px-[20px] py-[12px]">
          로그인
        </button>
      </Link>
      <button className="border-2 rounded-md px-[20px] py-[12px] border-white bg-[#2D3648] text-white">
        회원가입
      </button>
    </div>
  );
};

export default HeaderFooter;
