import PageHeader from "@/components/pageHeader";
type Props = object;

const challengeDetail = ({}: Props) => {
  return (
    <div className="m-auto my-10 h-screen max-w px-4 lg:px-20">
      <PageHeader title="나의 업적" />
    </div>
  );
};

export default challengeDetail;
