import { ApiPagination } from "@/components/reviews/apiPagination";
import ReviewSummaryList from "@/components/reviews/reviewSummaryList";
import SearchBox from "@/components/reviews/searchBox";
import { getReviewList } from "@/services/getReviewList";
import { TRequestReviewList } from "@/types/reviewTypes";

type Props = {
  searchParams: Promise<TRequestReviewList>;
};

const Reviews = async ({ searchParams }: Props) => {
  const params = await searchParams;
  const reviewListResponse = await getReviewList(params);

  return (
    <div className="m-auto max-w p-10">
      <SearchBox params={params} />
      <section className="my-10">
        <ReviewSummaryList reviewList={reviewListResponse?.result.content || []} size="lg" />
      </section>
      <ApiPagination
        route="reviews"
        params={params}
        prev={reviewListResponse?.result.prev || false}
        next={reviewListResponse?.result.next || false}
        current={reviewListResponse?.result.currentPage || 0}
        length={reviewListResponse?.result.endPage || 0}
      />
    </div>
  );
};

export default Reviews;
