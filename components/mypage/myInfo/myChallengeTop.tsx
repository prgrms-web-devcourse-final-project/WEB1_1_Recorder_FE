import { useRouter } from "next/navigation";
type Props = object;

const ComponentName = ({ }: Props) => {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center gap-6 border-b-2 border-btnColor mt-8">
        <p className="text-[32px] font-bold pb-3">나의 업적</p>
        <button className="text-[12px] text-btnColor" onClick={() => router.push("/myPage/AchievementDetail")}>+ 업적 상세 보기</button>
    </div>
  );
};

export default ComponentName;