import ContentDetail from "@/components/detail/contentDetail";
import { reviewDetail } from "@/constants/reviewDetail";

const LiveFeedbackDetail = async () => {
  return (
    <div className="m-auto flex max-w flex-col gap-5 p-10">
      <ContentDetail review={reviewDetail.result} isLiveFeedback />
    </div>
  );
};

export default LiveFeedbackDetail;
