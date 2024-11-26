import MentorSummaryItem from "@/components/mentorSummaryItem";
import ReviewSummaryList from "@/components/reviewSummaryList";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
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
    }
  ];
  const userTypes = ["all", "typesciprt", "react"];

  return (
    <main className="m-auto max-w px-4">
      <section className="my-2 flex">
        <Card className="mr-2 w-1/2">
          <CardHeader>
            <CardTitle>최신 질문</CardTitle>
          </CardHeader>
          <CardContent>
            <ReviewSummaryList reviewList={reviewList} />
          </CardContent>
        </Card>
        <Card className="ml-2 w-1/2">
          <CardHeader>
            <CardTitle>인기 질문</CardTitle>
          </CardHeader>
          <CardContent>
            <ReviewSummaryList reviewList={reviewList} />
          </CardContent>
        </Card>
      </section>
      <section className="my-2">
        <Card>
          <CardHeader>
            <CardTitle>기술별 질문</CardTitle>
            <CardDescription>
              <ToggleGroup type="multiple" variant="outline" className="flex justify-start">
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
            <ReviewSummaryList reviewList={reviewList} />
          </CardContent>
        </Card>
      </section>
      <section className="my-2">
        <Card>
          <CardHeader>
            <CardTitle>라이브 피드백</CardTitle>
          </CardHeader>
          <CardContent>
            <Carousel>
              <CarouselContent>
                {mentorList.map((mentor, i) => {
                  return <MentorSummaryItem key={i} {...mentor} />;
                })}
              </CarouselContent>
            </Carousel>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default Home;
