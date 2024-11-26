import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent } from "@/components/ui/carousel";

const Home = ({}) => {
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
  return (
    <main className="m-auto max-w px-4">
      <section className="my-2 flex">
        <Card className="mr-2 w-1/2">
          <CardHeader>
            <CardTitle>최신 질문</CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
        <Card className="ml-2 w-1/2">
          <CardHeader>
            <CardTitle>인기 질문</CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </section>
      <section className="my-2">
        <Card>
          <CardHeader>
            <CardTitle>기술별 질문</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </section>
      <section className="my-2">
        <Card>
          <CardHeader>
            <CardTitle>라이브 피드백</CardTitle>
          </CardHeader>
          <CardContent>
            <Carousel>
              <CarouselContent></CarouselContent>
            </Carousel>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default Home;
