import { useRouter } from "next/navigation";
type Props = object;

const ComponentName = ({ }: Props) => {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center gap-6 border-b-2 border-[#2D3648] mt-8">
        <p className="text-[32px] font-bold pb-3">나의 업적</p>
        <button className="text-[12px] text-[#2D3648]" onClick={() => router.push("/myPage/challengeDetail")}>+ 업적 상세 보기</button>
    </div>
  );
};

export default ComponentName;