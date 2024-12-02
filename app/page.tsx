import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import MentorSummaryItem from "@/components/mentors/mentorSummaryItem";
import ReviewSummaryList from "@/components/reviews/reviewSummaryList";
import { reviewList } from "@/constants/reviews";
import { mentorList } from "@/constants/mentors";
import { userStacks } from "@/constants/user";
import { getPopularReviewList, getReviewList } from "@/lib/getReviewList";

const Home = ({}) => {
  return (
    <div className="m-auto max-w px-4 lg:px-20">
      <section className="my-8 flex flex-col sm:flex-row">
        <Card className="sm:mr-2 sm:w-1/2">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">최신 질문</CardTitle>
          </CardHeader>
          <CardContent>
            <ReviewSummaryList reviewList={reviewList} length={3} />
          </CardContent>
        </Card>
        <Card className="sm:ml-2 sm:w-1/2">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">인기 질문</CardTitle>
          </CardHeader>
          <CardContent>
            <ReviewSummaryList reviewList={reviewList} length={3} />
          </CardContent>
        </Card>
      </section>
      <section className="my-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">기술별 질문</CardTitle>
            <CardDescription className="pt-2">
              <ToggleGroup type="single" variant="outline" className="flex justify-start">
                {userStacks.map((stack, i) => {
                  return (
                    <ToggleGroupItem key={i} value={stack} aria-label="Toggle bold">
                      {stack}
                    </ToggleGroupItem>
                  );
                })}
              </ToggleGroup>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ReviewSummaryList reviewList={reviewList} size="lg" length={3} />
          </CardContent>
        </Card>
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
