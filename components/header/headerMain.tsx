type Props = object;

const headerMain = ({ }: Props) => {
  return (
    <div className="flex gap-[20px]">
      <div className="hover:border-b-2 border-[#2D3648] py-[12px] cursor-pointer">코드리뷰</div>
      <div className="hover:border-b-2 border-[#2D3648] py-[12px] cursor-pointer">라이브 피드백</div>
    </div>
  );
};

export default headerMain;