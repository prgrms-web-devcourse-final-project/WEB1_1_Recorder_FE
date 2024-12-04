import Image from "next/image"
import PageHeader from "@/components/pageHeader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ChangeModal from "@/components/mypage/myInfo/changeModal";
import AchievementStatus from "@/components/mypage/myAchievement/AchievementStatus";
type Props = object;

const myAchievement = ({}: Props) => {
  return (
    <div className="m-auto my-10 h-full max-w px-4 lg:px-20">
      <PageHeader title="나의 업적" />
      <div className="mt-10 flex flex-col rounded-[10px] bg-secondary p-6">
        <div className="flex items-center justify-start gap-[50px] px-[70px] py-20">
          <Avatar className="h-40 w-40">
            <AvatarImage src="https://github.com/shadcn.png" className="h-40 w-40 rounded-full border-none bg-white" />
          </Avatar>
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex gap-5">
              <div className="flex items-center gap-2">
                <Image src="/img/silver.png" alt="" width={20} height={20} />
                <p>채택률</p>
              </div>
              <ChangeModal />
            </div>
            <p className="text-[24px] font-bold">test1</p>
            <p className="text-[20px] font-bold">test@email.com</p>
          </div>
        </div>
      </div>
      <AchievementStatus/>
    </div>
  );
};

export default myAchievement;
