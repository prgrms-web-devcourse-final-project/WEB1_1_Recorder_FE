import { Progress } from "@/components/ui/progress";

type Props = {
  achivement: { total: number; achieved: number } | null;
};

const calcProgress = (num1: number, num2: number) => {
  if (num2 != 0) {
    return (num1 / num2) * 100;
  }
  return 0;
};

const myChallenge = ({ achivement }: Props) => {
  return (
    <div className="m-auto my-10 flex w-5/6 flex-col items-center justify-center">
      <div className="flex w-full justify-around">
        <p className="text-2xl">
          달성한 업적 <span className="font-bold">5</span> 개
        </p>
        <div className="border-r-2"></div>
        <p className="text-2xl">
          총 업적 <span className="font-bold">{achivement?.total}</span> 개
        </p>
      </div>
      <Progress value={calcProgress(5, achivement?.total || 15)} className="mt-5" />
    </div>
  );
};

export default myChallenge;
