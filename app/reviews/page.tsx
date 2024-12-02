import SearchBox from "@/components/reviews/searchBox";
import ReviewSummaryList from "@/components/reviews/reviewSummaryList";
import { reviewList } from "@/constants/reviews";

const Reviews = () => {
  return (
    <div className="m-auto max-w lg:px-20">
      <SearchBox />
      <section className="my-10">
        <ReviewSummaryList reviewList={reviewList} size="lg" />
      </section>
    </div>
  );
};

export default Reviews;
