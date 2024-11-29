import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import MentorSummaryItem from "@/components/mentors/mentorSummaryItem";
import ReviewSummaryList from "@/components/reviews/reviewSummaryList";
import { Mentor } from "@/types/mentorTypes";
import { ReviewListItem } from "@/types/reviewTypes";

const Home = ({}) => {
  const reviewList: ReviewListItem[] = [
    {
      id: 1,
      writer: "user1",
      title: "title",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rem veritatis, aliquid recusandae possimus quos quo at eligendi eos tenetur assumenda velit aliquam cum culpa sint sit molestiae obcaecati impedit.",
      createdAt: "2020-10-10",
      answerCount: 3,
      readCount: 10,
      stacks: ["typescript", "react"]
    },
    {
      id: 2,
      writer: "user2",
      title: "title",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rem veritatis, aliquid recusandae possimus quos quo at eligendi eos tenetur assumenda velit aliquam cum culpa sint sit molestiae obcaecati impedit.",
      createdAt: "2020-10-10",
      answerCount: 3,
      readCount: 10,
      stacks: ["typescript", "react"]
    },
    {
      id: 3,
      writer: "user3",
      title: "title",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rem veritatis, aliquid recusandae possimus quos quo at eligendi eos tenetur assumenda velit aliquam cum culpa sint sit molestiae obcaecati impedit.",
      createdAt: "2020-10-10",
      answerCount: 3,
      readCount: 10,
      stacks: ["typescript", "react"]
    },
    {
      id: 4,
      writer: "user4",
      title: "title",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rem veritatis, aliquid recusandae possimus quos quo at eligendi eos tenetur assumenda velit aliquam cum culpa sint sit molestiae obcaecati impedit.",
      createdAt: "2020-10-10",
      answerCount: 3,
      readCount: 10,
      stacks: ["typescript", "react"]
    }
  ];
  const mentorList: Mentor[] = [
    {
      title: "라이브 피드백 멘토합니다.",
      type: ["react", "typescript"],
      business: "프로그래머스",
      score: 100,
      liveCount: 12,
      userId: "user1",
      comment: "안녕하세요. 라이브 피드백 멘티를 모집합니다."
    },
    {
      title: "라이브 피드백 멘토합니다.",
      type: ["react", "typescript"],
      business: "프로그래머스",
      score: 100,
      liveCount: 12,
      userId: "user2",
      comment: "안녕하세요. 라이브 피드백 멘티를 모집합니다."
    },
    {
      title: "라이브 피드백 멘토합니다.",
      type: ["react", "typescript"],
      business: "프로그래머스",
      score: 100,
      liveCount: 12,
      userId: "user3",
      comment: "안녕하세요. 라이브 피드백 멘티를 모집합니다."
    },
    {
      title: "라이브 피드백 멘토합니다.",
      type: ["react", "typescript"],
      business: "프로그래머스",
      score: 100,
      liveCount: 12,
      userId: "user1",
      comment: "안녕하세요. 라이브 피드백 멘티를 모집합니다."
    },
    {
      title: "라이브 피드백 멘토합니다.",
      type: ["react", "typescript"],
      business: "프로그래머스",
      score: 100,
      liveCount: 12,
      userId: "user2",
      comment: "안녕하세요. 라이브 피드백 멘티를 모집합니다."
    },
    {
      title: "라이브 피드백 멘토합니다.",
      type: ["react", "typescript"],
      business: "프로그래머스",
      score: 100,
      liveCount: 12,
      userId: "user3",
      comment: "안녕하세요. 라이브 피드백 멘티를 모집합니다."
    }
  ];
  const userTypes = ["TypeScript", "React", "NextJS"];

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
                {userTypes.map((type, i) => {
                  return (
                    <ToggleGroupItem key={i} value={type} aria-label="Toggle bold">
                      {type}
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
