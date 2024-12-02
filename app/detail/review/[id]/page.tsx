import Answer from "@/components/detail/review/answer";
import AnswerForm from "@/components/detail/review/answerForm";
import ReviewDetail from "@/components/detail/review/reviewDetail";

const ReviewDetailPage = async () => {
  return (
    <div className="m-auto flex max-w flex-col gap-5 p-10">
      <ReviewDetail />
      <hr />
      <AnswerForm />
      <Answer />
    </div>
  );
};

export default ReviewDetailPage;
