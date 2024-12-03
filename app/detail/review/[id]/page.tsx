import Answer from "@/components/detail/review/answer";
import AnswerForm from "@/components/detail/review/answerForm";
import ReviewDetail from "@/components/detail/review/reviewDetail";
import { Separator } from "@/components/ui/separator";

import { reviewDetail } from "@/constants/reviewDetail";

const ReviewDetailPage = async () => {
  return (
    <div className="m-auto flex max-w flex-col gap-5 p-10">
      <ReviewDetail review={reviewDetail.result} />
      <Separator className="bg-primary opacity-70" />
      <AnswerForm />
      {reviewDetail.result.answers.map((answer, index) => (
        <div key={index}>
          <Answer answer={answer} />
          <Separator className="bg-primary opacity-70" />
        </div>
      ))}
    </div>
  );
};

export default ReviewDetailPage;
