import RequestForm from "@/components/request/requestForm";
import PageHeader from "@/components/pageHeader";
type Props = {
  params: Promise<{ userId: string }>;
};
const RequestLiveFeedback = async ({ params }: Props) => {
  const userId = (await params).userId;
  return (
    <div className="m-auto max-w p-10">
      <PageHeader title={`${userId}님에게 라이브 피드백 요청`} />
      <RequestForm />
    </div>
  );
};

export default RequestLiveFeedback;
