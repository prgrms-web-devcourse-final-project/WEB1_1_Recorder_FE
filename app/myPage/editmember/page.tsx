import PageHeader from "@/components/pageHeader";
type Props = object;

const editmember = ({}: Props) => {
  return (
    <div className="m-auto my-10 h-screen max-w px-4 lg:px-20">
      <PageHeader title="마이페이지" />
      <p className="text-24pt cursor-pointer border-b-2">나의 정보</p>
    </div>
  );
};

export default editmember;
