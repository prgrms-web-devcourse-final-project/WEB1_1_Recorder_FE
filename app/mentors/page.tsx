import MentorGrid from "@/components/mentors/mentorGrid";
import PageHeader from "@/components/pageHeader";
import { Button } from "@/components/ui/button";
import { Mentor } from "@/types/mentorTypes";

const Mentors = () => {
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

  return (
    <div className="m-auto max-w px-4 lg:px-20">
      <PageHeader title="라이브 피드백 멘토">
        <Button size="lg" className="text-white">
          멘토 신청하기
        </Button>
      </PageHeader>
      <MentorGrid mentorList={mentorList} className="my-10"></MentorGrid>
    </div>
  );
};

export default Mentors;
