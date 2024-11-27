import Image from "next/image";
import HeaderMain from "./header/headerMain";
import HeaderFooterMember from "./header/headerFooterMember";

type Props = object;

const Header = ({}: Props) => {
  return (
    <div className="flex items-center justify-between border-b-2 border-[#1A202C] p-[40px]">
      <div className="flex items-center gap-[60px]">
        <Image src="/img/logo.png" alt="logo" width={150} height={50} />
        <HeaderMain />
      </div>
      <HeaderFooterMember />
    </div>
  );
};

export default Header;