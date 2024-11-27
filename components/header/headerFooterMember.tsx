import Image from "next/image";

const HeaderFooterMember = () => (
  <div className="flex items-center gap-[20px]">
    <input
      className="w-[300px] border-2 rounded-md border-[#CBD2E0] px-[20px] py-[12px] focus:outline-none"
      type="text"
      placeholder="Search"
    />
    <Image
      className="ml-5 cursor-pointer"
      src="/img/icon-bell.png"
      alt="bell"
      width={50}
      height={37}
    />
    <div className="flex items-center gap-2">
      <Image
        className="cursor-pointer"
        src="/img/WF Badge.png"
        alt="badge"
        width={50}
        height={37}
      />
      <p className="text-[#717D96]">Example ID</p>
    </div>
  </div>
);

export default HeaderFooterMember;
