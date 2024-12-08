import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ReviewSummaryList from "@/components/reviews/reviewSummaryList";
import ReviewByStack from "@/components/reviews/reviewByStack";
import { MentorSlide } from "@/components/mentors/mentorsSlise";
import { getPopularReviewList, getRecentReviewList } from "@/services/getReviewList";
import { getMentorList } from "@/services/getMentorList";

const Home = async () => {
  const recentReviewList = await getRecentReviewList({ size: 3 });
  const popularReviewList = await getPopularReviewList({ size: 3, days: 7 });
  const mentorResponse = await getMentorList({ page: "0" });
  const mentorList = mentorResponse?.result.content || [];

  return (
    <div className="m-auto max-w px-4 lg:px-20">
      <section className="my-8 flex flex-col sm:flex-row">
        <Card className="sm:mr-2 sm:w-1/2">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">최신 질문</CardTitle>
          </CardHeader>
          <CardContent>
            <ReviewSummaryList reviewList={recentReviewList} />
          </CardContent>
        </Card>
        <Card className="sm:ml-2 sm:w-1/2">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">인기 질문</CardTitle>
          </CardHeader>
          <CardContent>
            <ReviewSummaryList reviewList={popularReviewList} />
          </CardContent>
        </Card>
      </section>
      <section className="my-8">
        <ReviewByStack />
      </section>
      <section className="my-8">
        <MentorSlide mentorList={mentorList} />
      </section>
    </div>
  );
};

export default Home;
