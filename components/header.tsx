import Image from 'next/image';
import HeaderMain from '../components/header/headerMain';
import HeaderFooter from '../components/header/headerFooter';

type Props = object;

const Header = ({ }: Props) => {
  return (
    <div className="flex items-center justify-between p-[40px] border-b-2 border-[#1A202C]">
      <div className="flex items-center gap-[60px]">
      <Image src="/img/logo.png" alt="logo" width={150} height={50}/>
      <HeaderMain />
      </div>
      <HeaderFooter />
    </div>
  );
};

export default Header;