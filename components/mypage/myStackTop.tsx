type Props = object;

const myStack = ({}: Props) => {
  return (
    <div className="mt-8 flex items-center justify-between gap-6 border-b-2 border-[#2D3648]">
      <p className="pb-3 text-[32px] font-bold">기술 스택</p>
      <button className="text-[12px] text-[#2D3648]">
        + 기술 스택 추가하기
      </button>
    </div>
  );
};

export default myStack;
