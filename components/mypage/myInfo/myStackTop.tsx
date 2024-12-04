type Props = object;

const myStackTop = ({}: Props) => {
  return (
    <div className="mt-8 flex items-center justify-between gap-6 border-b-2 border-btnColor">
      <p className="pb-3 text-[32px] font-bold">기술 스택</p>
      <button className="text-[12px] text-btnColor">
        + 기술 스택 추가하기
      </button>
    </div>
  );
};

export default myStackTop;
