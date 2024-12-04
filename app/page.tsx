import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import MentorSummaryItem from "@/components/mentors/mentorSummaryItem";
import ReviewSummaryList from "@/components/reviews/reviewSummaryList";
import { mentorList } from "@/constants/mentors";
import ReviewByStack from "@/components/reviews/reviewByStack";
import { getPopularReviewList, getRecentReviewList } from "@/services/getReviewList";
import { TReviewItem } from "@/types/reviewTypes";

const Home = async () => {
  const recentReviewList: TReviewItem[] | [] = await getRecentReviewList({ size: "3" });
  const popularReviewList: TReviewItem[] | [] = await getPopularReviewList({ size: "3", days: "7" });

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
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">라이브 피드백</CardTitle>
          </CardHeader>
          <CardContent>
            <Carousel>
              <CarouselContent className="p-2">
                {mentorList.map((mentor, i) => {
                  return (
                    <CarouselItem key={i} className="sm:basis-1/2 md:basis-1/3 xl:md:basis-1/5">
                      <MentorSummaryItem mentor={mentor} />
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="-left-4" />
              <CarouselNext className="-right-4" />
            </Carousel>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Home;
