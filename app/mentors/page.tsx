import PageHeader from "@/components/pageHeader";
import { Button } from "@/components/ui/button";

const Mentors = () => {
  return (
    <main className="m-auto my-10 max-w px-4 lg:px-20">
      <PageHeader title="라이브 피드백 멘토">
        <Button>신청하기</Button>
      </PageHeader>
    </main>
  );
};

export default Mentors;
