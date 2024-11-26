import Image from 'next/image';

type Props = object;

const Header = ({ }: Props) => {
  return (
<div className="header">
    <Image src="/img/logo.png" alt="logo" width={150} height={50}/>
    </div>
  );
};

export default Header;