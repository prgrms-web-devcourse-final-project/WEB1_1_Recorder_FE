import ReviewDetail from "@/components/detail/review/reviewDetail";
import { reviewDetail } from "@/constants/reviewDetail";

const LiveFeedbackDetail = async () => {
  return (
    <div className="m-auto flex max-w flex-col gap-5 p-10">
      <ReviewDetail review={reviewDetail.result} isLiveFeedback />
    </div>
  );
};

export default LiveFeedbackDetail;
