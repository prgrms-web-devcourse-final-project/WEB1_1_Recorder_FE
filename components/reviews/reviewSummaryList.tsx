import ReviewSummaryItem from "@/components/reviews/reviewSummaryItem";
import { Question } from "@/types/reviewTypes";

type Props = {
  reviewList: Question[];
  size?: "md" | "lg";
  length?: number;
};

const ReviewSummaryList = ({ reviewList, size = "md", length = reviewList.length }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {reviewList.slice(0, length).map((review, i) => {
        return <ReviewSummaryItem key={i} size={size} {...review}></ReviewSummaryItem>;
      })}
    </div>
  );
};

export default ReviewSummaryList;
