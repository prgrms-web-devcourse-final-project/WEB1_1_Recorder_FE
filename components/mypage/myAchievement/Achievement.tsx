import PageHeader from "@/components/pageHeader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import ChangeModal from "@/components/mypage/myInfo/changeModal";
import Image from "next/image";
type Props = object;

const myAchievement = ({}: Props) => {
  return (
    <div className="m-auto my-10 h-screen max-w px-4 lg:px-20">
      <PageHeader title="나의 업적" />
      <div className="mt-10 flex flex-col rounded-[10px] bg-secondary p-6">
        <div className="flex items-center justify-start gap-[50px] px-[70px] py-20">
          <Avatar className="h-40 w-40">
            <AvatarImage src="https://github.com/shadcn.png" className="h-40 w-40 rounded-full border-none bg-white" />
          </Avatar>
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex gap-5">
              <div className="flex items-center gap-2">
                <Image src="/img/bronze.png" alt="" width={20} height={20}/>
                <p>채택 답변수</p>
              </div>
              <ChangeModal />
            </div>
            <p className="text-[24px] font-bold">test1</p>
            <p className="text-[20px] font-bold">test@email.com</p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between gap-6 border-b-2 border-btnColor">
        <p className="pb-3 text-[32px] font-bold">업적 현황</p>
      </div>

      <div className="mt-10">
        <div className="flex flex-col rounded-[10px] px-[120px] py-[70px]">
          <div className="flex flex-col items-center justify-center">
            <div className="flex gap-10">
              <p className="text-2xl">달성한 업적 1개</p>
              <div className="border-r-2"></div>
              <p className="text-2xl">총 업적 5개</p>
            </div>
            <Progress value={20} className="mt-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default myAchievement;
