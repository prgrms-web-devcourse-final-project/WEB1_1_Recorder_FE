import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import MentorSummaryItem from "@/components/mentors/mentorSummaryItem";
import ReviewSummaryList from "@/components/reviews/reviewSummaryList";
import ReviewByStack from "@/components/reviews/reviewByStack";
import { getPopularReviewList, getRecentReviewList, getReviewList } from "@/services/getReviewList";
import { getMentorList } from "@/services/getMentorList";
import { TReviewItem } from "@/types/reviewTypes";
import { TMentorItem } from "@/types/mentorTypes";
import { ImFilesEmpty } from "react-icons/im";
import { getUserTechs } from "@/services/getUserTechs";
import { MentorSlide } from "@/components/mentors/mentorsSlise";
import { mentorList } from "@/constants/user";

const Home = async () => {
  const recentReviewList: TReviewItem[] | [] = await getRecentReviewList({ size: 3 });
  const popularReviewList: TReviewItem[] | [] = await getPopularReviewList({ size: 3, days: 7 });
  // const mentorList: TMentorItem[] | [] = await getMentorList({ page: 0 });
  const userTechs: { id: number; name: string }[] | [] = await getUserTechs();

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
        <ReviewByStack userTechs={userTechs} />
      </section>
      <section className="my-8">
        <MentorSlide mentorList={mentorList} />
      </section>
    </div>
  );
};

export default Home;
