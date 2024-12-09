import { useRouter } from "next/navigation";
type Props = object;

const myChallengeTop = ({}: Props) => {
  const router = useRouter();
  return (
    <div className="mt-8 flex items-center justify-between gap-6 border-b-2 border-btnColor">
      <p className="pb-3 text-[32px] font-bold">나의 업적</p>
      <button className="text-btnColor hover:text-primary" onClick={() => router.push("/myPage/achievement")}>
        + 업적 상세 보기
      </button>
    </div>
  );
};

export default myChallengeTop;
