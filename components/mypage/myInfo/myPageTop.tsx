type Props = object;

const MyPageTop = ({}: Props) => {
  return (
    <div className="flex gap-6 border-b-2 mb-10">
      <p className="text-24pt cursor-pointer border-b-2 border-transparent hover:border-[#2D3648]">
        나의 정보
      </p>
      <p className="text-24pt cursor-pointer border-b-2 border-transparent hover:border-[#2D3648]">
        나의 활동
      </p>
    </div>
  );
};

export default MyPageTop;
