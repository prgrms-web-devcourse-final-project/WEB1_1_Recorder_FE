import Image from "next/image";
type Props = object;

const signUp = ({ }: Props) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center h-screen max-w-4xl w-full">
        <div className="w-[600px] p-[40px]">
          <div className="flex flex-col items-center gap-[40px]">
            <Image src="/img/logo.png" alt="logo" width={300} height={100}/>
            <p className="text-[48px]">SignUp</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signUp;