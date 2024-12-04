import Image from "next/image";
type Props = object;

const LoginHeader = ({}: Props) => {
  return (
    <div className="flex flex-col items-center gap-[100px]">
      <Image src="/svg/logo.svg" alt="logo" width={300} height={100} />
      <p className="mb-[100px] text-[18px]">Join our platform today</p>
    </div>
  );
};

export default LoginHeader;
