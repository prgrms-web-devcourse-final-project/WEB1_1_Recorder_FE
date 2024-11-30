import Image from "next/image";
type Props = object;

const myInfoProfile = ({ }: Props) => {
  return (
<div className="flex-col items-center bg-[#E8E8E8] rounded-[10px]">
    <Image className="bg-white border-none rounded-full" src="" alt="profile" width={150} height={150}/>
    <div className="flex flex-col gap-2">
        <p>name</p>
        <p>test@email.com</p>
        <div className="flex items-center">
            <p>계정 연동</p>
            <Image src="" alt="profile" width={30} height={30}/>
        </div>
    </div>
  </div>
  );
};

export default myInfoProfile;