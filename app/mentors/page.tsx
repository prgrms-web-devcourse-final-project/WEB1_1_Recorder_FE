import MentorGrid from "@/components/mentors/mentorGrid";
import PageHeader from "@/components/pageHeader";
import { Button } from "@/components/ui/button";
import { mentorList } from "@/constants/mentors";

const Mentors = () => {
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
