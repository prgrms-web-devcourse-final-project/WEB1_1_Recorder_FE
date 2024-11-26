import ReviewSummaryItem from "@/components/reviewSummaryItem";
import { Question } from "@/types/reviewTypes";

type Props = {
  reviewList: Question[];
};

const ReviewSummaryList = ({ reviewList }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {reviewList.map((review, i) => {
        return <ReviewSummaryItem key={i} {...review}></ReviewSummaryItem>;
      })}
    </div>
  );
};

export default ReviewSummaryList;
