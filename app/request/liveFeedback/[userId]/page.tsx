import RequestLiveFeedbackForm from "@/components/request/requestLiveFeedbackForm";
import PageHeader from "@/components/pageHeader";
type Props = {
  params: Promise<{ userId: string }>;
};
const RequestLiveFeedback = async ({ params }: Props) => {
  const userId = (await params).userId;
  return (
    <div className="m-auto max-w p-10">
      <PageHeader title={`${Number(userId)}님에게 라이브 피드백`} />
      <RequestLiveFeedbackForm teacherId={Number(userId)} />
    </div>
  );
};

export default RequestLiveFeedback;
