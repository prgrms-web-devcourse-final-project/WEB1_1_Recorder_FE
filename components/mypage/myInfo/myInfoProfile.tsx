import Image from "next/image";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
type Props = object;

const MyInfoProfile = ({}: Props) => {
  const router = useRouter();
  return (
    <div className="flex flex-col rounded-[10px] bg-secondary p-6">
      <div className="flex flex-col items-center justify-center">
        <Avatar className="h-40 w-40">
          <AvatarImage src="https://github.com/shadcn.png" className="h-40 w-40 rounded-full border-none bg-white" />
        </Avatar>
        <div className="mt-4 flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <Image src="/img/silver.png" alt="" width={20} height={20} />
            <p>채택률</p>
            <p>test1</p>
          </div>
          <p>test@email.com</p>
          <div className="flex items-center gap-2">
            <p>계정 연동</p>
            <Image src="/img/github_grayimg.png" alt="social" width={40} height={30} />
          </div>
        </div>
      </div>
      <div className="mr-12 mt-4 flex justify-end">
        <Button size="edit" className="bg-btnColor text-white" onClick={() => router.push("/myPage/editmember")}>
          회원정보 수정
        </Button>
      </div>
    </div>
  );
};

export default MyInfoProfile;
