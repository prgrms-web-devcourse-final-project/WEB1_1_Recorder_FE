import ChatInput from "@/components/chat/chatInput";
import MentorSummaryItem from "@/components/mentorSummaryItem";
import ReviewSummaryList from "@/components/reviewSummaryList";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const Home = ({}) => {
  const reviewList = [
    {
      id: 1,
      users_id: 1,
      title: "title1",
      type: ["typescript", "react"],
      state: "state",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia, illo, iste earum maxime molestias incidunt vitae consequuntur sint porro placeat. Quibusdam, ullam aperiam rem earum ipsa magnam nobis odio.",
      read_count: 10,
      created_at: "2020-10-10",
      updated_at: "2020-10-11",
      is_deleted: false,
      is_anomyous: false,
      userInfo: {
        userName: "user123",
        userImage: "https://github.com/shadcn.png"
      }
    },
    {
      id: 2,
      users_id: 2,
      title: "title2",
      type: ["python"],
      state: "state",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia, illo, iste earum maxime molestias incidunt vitae consequuntur sint porro placeat. Quibusdam, ullam aperiam rem earum ipsa magnam nobis odio.",
      read_count: 10,
      created_at: "2020-10-10",
      updated_at: "2020-10-11",
      is_deleted: false,
      is_anomyous: false
    },
    {
      id: 3,
      users_id: 3,
      title: "title3",
      type: ["java", "spring"],
      state: "state",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia, illo, iste earum maxime molestias incidunt vitae consequuntur sint porro placeat. Quibusdam, ullam aperiam rem earum ipsa magnam nobis odio.",
      read_count: 10,
      created_at: "2020-10-10",
      updated_at: "2020-10-11",
      is_deleted: false,
      is_anomyous: false
    }
  ];
  const mentorList = [
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
  const userTypes = ["typesciprt", "react", "python"];

  return (
    <main className="m-auto my-10 max-w px-4 lg:px-20">
      <section className="my-4 flex flex-col sm:flex-row">
        <Card className="sm:mr-2 sm:w-1/2">
          <CardHeader>
            <CardTitle>최신 질문</CardTitle>
          </CardHeader>
          <CardContent>
            <ReviewSummaryList reviewList={reviewList} />
          </CardContent>
        </Card>
        <Card className="sm:ml-2 sm:w-1/2">
          <CardHeader>
            <CardTitle>인기 질문</CardTitle>
          </CardHeader>
          <CardContent>
            <ReviewSummaryList reviewList={reviewList} />
          </CardContent>
        </Card>
      </section>
      <section className="my-4">
        <Card>
          <CardHeader>
            <CardTitle>기술별 질문</CardTitle>
            <CardDescription>
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
            <ReviewSummaryList reviewList={reviewList} size="lg" />
          </CardContent>
        </Card>
      </section>
      <section className="my-4">
        <Card>
          <CardHeader>
            <CardTitle>라이브 피드백</CardTitle>
          </CardHeader>
          <CardContent>
            <Carousel>
              <CarouselContent className="p-2">
                {mentorList.map((mentor, i) => {
                  return (
                    <CarouselItem key={i} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <MentorSummaryItem {...mentor} />
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
    </main>
  );
};

export default Home;
