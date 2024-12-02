import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
type Props = object;

const MyInfoProfile = ({}: Props) => {
  const router = useRouter();
  return (
    <div className="flex flex-col bg-secondary rounded-[10px] p-6">
      <div className="flex flex-col items-center justify-center">
        <Image
          className="bg-white border-none rounded-full"
          src="img/svg/logo.svg"
          alt=""
          width={150}
          height={150}
        />
        <div className="flex flex-col gap-2 items-center mt-4">
          <div className="flex items-center gap-2">
            <Image src="/img/reward.png" alt="reward" width={30} height={30} />
            <p>test1</p>
          </div>
          <p>test@email.com</p>
          <div className="flex items-center gap-2">
            <p>계정 연동</p>
            <Image src="/img/github_grayimg.png" alt="social" width={40} height={30} />
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-4 mr-12">
        <Button size="edit" className="bg-btnColor text-white" onClick={() => router.push("/myPage/editProfile")}>
          회원정보수정
        </Button>
      </div>
    </div>
  );
};

export default MyInfoProfile;
