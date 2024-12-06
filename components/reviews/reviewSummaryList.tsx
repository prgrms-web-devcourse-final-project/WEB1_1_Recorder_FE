import ReviewSummaryItem from "@/components/reviews/reviewSummaryItem";
import { TReviewItem } from "@/types/reviewTypes";
import { ImFilesEmpty } from "react-icons/im";

type Props = {
  reviewList: TReviewItem[] | [];
  size?: "md" | "lg";
  length?: number;
};

const ReviewSummaryList = ({ reviewList, size = "md", length = reviewList.length }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {length < 1 ? (
        <div className="flex h-72 w-full flex-col items-center justify-center">
          <p className="mb-5">아직 질문이 없습니다.</p>
          <ImFilesEmpty size={80} color="gray" />
        </div>
      ) : (
        reviewList.slice(0, length).map((review, i) => {
          return <ReviewSummaryItem key={i} size={size} review={review}></ReviewSummaryItem>;
        })
      )}
    </div>
  );
};

export default ReviewSummaryList;
