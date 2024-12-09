import { Separator } from "@/components/separator";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
type Props = object;

const AchievementStatus = ({}: Props) => {
  return (
    <div className="mb-32">
      <div className="mt-8 flex items-center justify-between gap-6 border-b-2 border-btnColor">
        <p className="pb-3 text-[32px] font-bold">도전과제 현황</p>
      </div>
      <div className="mt-10">
        <div className="flex flex-col px-20 py-[70px]">
          <div className="flex w-full flex-col items-center justify-center">
            <div className="mb-10 flex w-full justify-around">
              <p className="text-2xl">
                달성한 업적 <span className="font-bold">5</span> 개
              </p>
              <div className="border-r-2"></div>
              <p className="text-2xl">
                총 업적 <span className="font-bold">15</span> 개
              </p>
            </div>
            <Progress value={33} className="mt-5" />
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between gap-6 border-b-2 border-gray-300"></div>
        <div className="mt-20 flex flex-col items-center px-20">
          <p className="mt-5 text-center">채택률</p>
          <div className="mt-5 flex w-full">
            <div className="flex w-1/3 justify-center gap-2">
              <Image src="/img/bronze.png" alt="" width={20} height={20} />
              <p>50% 이상</p>
            </div>
            <div className="border-r-2"></div>
            <div className="flex w-1/3 justify-center gap-2">
              <Image src="/img/silver.png" alt="" width={20} height={20} />
              <p>55% 이상</p>
            </div>
            <div className="border-r-2"></div>
            <div className="flex w-1/3 justify-center gap-2">
              <Image src="/img/gold.png" alt="" width={20} height={20} />
              <p>50개</p>
            </div>
          </div>
          <Progress value={33} className="mt-5" />
        </div>
        <div className="mt-20 flex flex-col items-center px-20">
          <p className="mt-5 text-center">N일 연속 답변</p>
          <div className="mt-5 flex w-full">
            <div className="flex w-1/3 justify-center gap-2">
              <Image src="/img/bronze.png" alt="" width={20} height={20} />
              <p>3일</p>
            </div>
            <div className="border-r-2"></div>
            <div className="flex w-1/3 justify-center gap-2">
              <Image src="/img/silver.png" alt="" width={20} height={20} />
              <p>7일</p>
            </div>
            <div className="border-r-2"></div>
            <div className="flex w-1/3 justify-center gap-2">
              <Image src="/img/gold.png" alt="" width={20} height={20} />
              <p>14일</p>
            </div>
          </div>
          <Progress value={66} className="mt-5" />
        </div>
        <div className="mt-20 flex flex-col items-center px-20">
          <p className="mt-5 text-center">채택 답변 개수</p>
          <div className="mt-5 flex w-full">
            <div className="flex w-1/3 justify-center gap-2">
              <Image src="/img/bronze.png" alt="" width={20} height={20} />
              <p>10개</p>
            </div>
            <div className="border-r-2"></div>
            <div className="flex w-1/3 justify-center gap-2">
              <Image src="/img/silver.png" alt="" width={20} height={20} />
              <p>30개</p>
            </div>
            <div className="border-r-2"></div>
            <div className="flex w-1/3 justify-center gap-2">
              <Image src="/img/gold.png" alt="" width={20} height={20} />
              <p>30개</p>
            </div>
          </div>
          <Progress value={33} className="mt-5" />
        </div>
        <div className="mt-20 flex flex-col items-center px-20">
          <p className="mt-5 text-center">누적 추천 수</p>
          <div className="mt-5 flex w-full">
            <div className="flex w-1/3 justify-center gap-2">
              <Image src="/img/bronze.png" alt="" width={20} height={20} />
              <p>100개</p>
            </div>
            <div className="border-r-2"></div>
            <div className="flex w-1/3 justify-center gap-2">
              <Image src="/img/silver.png" alt="" width={20} height={20} />
              <p>200개</p>
            </div>
            <div className="border-r-2"></div>
            <div className="flex w-1/3 justify-center gap-2">
              <Image src="/img/gold.png" alt="" width={20} height={20} />
              <p>300개</p>
            </div>
          </div>
          <Progress value={33} className="mt-5" />
        </div>
        <div className="mt-20 flex flex-col items-center px-20">
          <p className="mt-5 text-center">받은 리뷰 요청 수</p>
          <div className="mt-5 flex w-full">
            <div className="flex w-1/3 justify-center gap-2">
              <Image src="/img/bronze.png" alt="" width={20} height={20} />
              <p>10개</p>
            </div>
            <div className="border-r-2"></div>
            <div className="flex w-1/3 justify-center gap-2">
              <Image src="/img/silver.png" alt="" width={20} height={20} />
              <p>20개</p>
            </div>
            <div className="border-r-2"></div>
            <div className="flex w-1/3 justify-center gap-2">
              <Image src="/img/gold.png" alt="" width={20} height={20} />
              <p>30개</p>
            </div>
          </div>
          <Progress value={33} className="mt-5" />
        </div>
      </div>
    </div>
  );
};

export default AchievementStatus;
