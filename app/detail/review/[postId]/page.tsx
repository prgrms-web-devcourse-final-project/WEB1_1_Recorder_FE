import AnswerDetail from "@/components/detail/review/answer";
import AnswerForm from "@/components/detail/review/answerForm";
import ContentDetail from "@/components/detail/contentDetail";
import { Separator } from "@/components/ui/separator";

import { reviewDetail } from "@/constants/reviewDetail";

const ReviewDetail = async () => {
  return (
    <div className="m-auto flex max-w flex-col gap-5 p-10">
      <ContentDetail review={reviewDetail.result} />
      <Separator className="bg-primary opacity-70" />
      <AnswerForm />
      {reviewDetail.result.answers.map((answer, index) => (
        <div key={index}>
          <AnswerDetail answer={answer} />
          <Separator className="bg-primary opacity-70" />
        </div>
      ))}
    </div>
  );
};

export default ReviewDetail;
