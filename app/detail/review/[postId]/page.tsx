import AnswerDetail from "@/components/detail/review/answer";
import AnswerForm from "@/components/detail/review/answerForm";
import ContentDetail from "@/components/detail/contentDetail";
import { Separator } from "@/components/ui/separator";

import getReviewDetail from "@/services/getReviewDetail";
import getAnswers from "@/services/getAnswers";
type Props = {
  params: Promise<{ postId: number }>;
};
const ReviewDetail = async ({ params }: Props) => {
  const postId = (await params).postId;

  const reviewDetail = await getReviewDetail({ id: postId });
  const answers = await getAnswers({ questionId: postId });
  return (
    <div className="m-auto flex max-w flex-col gap-5 p-10">
      <ContentDetail review={reviewDetail.result} />
      <Separator className="bg-primary opacity-70" />
      <AnswerForm postId={postId} />
      {answers.result.map((answer, index) => (
        <div key={index}>
          <AnswerDetail answer={answer} postId={postId} />
          <Separator className="bg-primary opacity-70" />
        </div>
      ))}
    </div>
  );
};

export default ReviewDetail;
