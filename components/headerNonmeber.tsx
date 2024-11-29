import Image from "next/image";
import HeaderMain from "./header/headerMain";
import HeaderFooter from "./header/headerFooter";

type Props = object;

const HeaderNonmember = ({}: Props) => {
  return (
    <div className="flex items-center justify-center border-b-2 border-[#1A202C] p-[40px]">
      <div className="flex items-center justify-between w-full max-w">
        <div className="flex items-center gap-[60px]">
          <Image src="/img/logo.png" alt="logo" width={150} height={50} />
          <HeaderMain />
        </div>
        <HeaderFooter />
      </div>
    </div>
  );
};

export default HeaderNonmember;
