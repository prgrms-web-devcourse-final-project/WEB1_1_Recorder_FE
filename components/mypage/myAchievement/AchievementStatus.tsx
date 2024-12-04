import { Progress } from "@/components/ui/progress";
import Image from "next/image";
type Props = object;

const AchievementStatus = ({}: Props) => {
  return (
    <div>
      <div className="mt-8 flex items-center justify-between gap-6 border-b-2 border-btnColor">
        <p className="pb-3 text-[32px] font-bold">업적 현황</p>
      </div>

      <div className="mt-10">
        <div className="flex flex-col rounded-[10px] px-[120px] py-[70px]">
          <div className="flex flex-col items-center justify-center">
            <div className="flex gap-10">
              <p className="text-2xl">달성한 업적 1개</p>
              <div className="border-r-2"></div>
              <p className="text-2xl">총 업적 3개</p>
            </div>
            <Progress value={20} className="mt-5" />
          </div>

          <div className="mt-10 flex flex-col items-center">
            <p className="mt-5 text-center">채택률</p>
            <div className="mt-5 flex gap-10">
              <Image src="/img/bronze.png" alt="" width={20} height={20} />
              <p>50% 이상</p>
              <div className="border-r-2"></div>
              <Image src="/img/silver.png" alt="" width={20} height={20} />
              <p>55% 이상</p>
              <div className="border-r-2"></div>
              <Image src="/img/gold.png" alt="" width={20} height={20} />
              <p>60% 이상</p>
            </div>
            <Progress value={50} className="mt-5" />
          </div>

          <div className="mt-10 flex flex-col items-center">
            <p className="mt-5 text-center">N일 연속 답변</p>
            <div className="mt-5 flex gap-10">
              <Image src="/img/bronze.png" alt="" width={20} height={20} />
              <p>3일</p>
              <div className="border-r-2"></div>
              <Image src="/img/silver.png" alt="" width={20} height={20} />
              <p>7일</p>
              <div className="border-r-2"></div>
              <Image src="/img/gold.png" alt="" width={20} height={20} />
              <p>14일</p>
            </div>
            <Progress value={0} className="mt-5" />
          </div>

          <div className="mt-10 flex flex-col items-center">
            <p className="mt-5 text-center">채택 답변 개수</p>
            <div className="mt-5 flex gap-10">
              <Image src="/img/bronze.png" alt="" width={20} height={20} />
              <p>10개</p>
              <div className="border-r-2"></div>
              <Image src="/img/silver.png" alt="" width={20} height={20} />
              <p>30개</p>
              <div className="border-r-2"></div>
              <Image src="/img/gold.png" alt="" width={20} height={20} />
              <p>50개</p>
            </div>
            <Progress value={5} className="mt-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementStatus;
