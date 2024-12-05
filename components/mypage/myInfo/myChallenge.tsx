type Props = object;
import { Progress } from "@/components/ui/progress"

const myChallenge = ({}: Props) => {
  return (
    <div className="mt-10">
      <div className="flex flex-col rounded-[10px] px-[120px] py-[70px]">
        <div className="flex flex-col items-center justify-center">
            <div className="flex gap-10">
                <p className="text-2xl">달성한 업적 1개</p>
                <div className="border-r-2"></div>
                <p className="text-2xl">총 업적 3개</p>
            </div>
            <Progress value={33} className="mt-5"/>
        </div>
      </div>
    </div>
  );
};

export default myChallenge;
