import RequestForm from "@/components/request/requestForm";
import PageHeader from "@/components/pageHeader";
const RequestReview = ({}) => {
  return (
    <div className="m-auto max-w p-10">
      <PageHeader title="리뷰 요청" />
      <RequestForm />
    </div>
  );
};

export default RequestReview;
