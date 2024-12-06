import AddMentorModal from "@/components/mentors/addMentorModal";
import { MentorDetailModal } from "@/components/mentors/mentorDetailModal";
import MentorGrid from "@/components/mentors/mentorGrid";
import PageHeader from "@/components/pageHeader";
import { getMentorList } from "@/services/getMentorList";
import { TMentorItem } from "@/types/mentorTypes";

const Mentors = async () => {
  const mentorList: TMentorItem[] | [] = await getMentorList({ page: 0 });

  return (
    <div className="m-auto max-w px-4 lg:px-20">
      <PageHeader title="라이브 피드백 멘토">
        <AddMentorModal />
      </PageHeader>
      <MentorDetailModal />
      <MentorGrid mentorList={mentorList} className="my-10"></MentorGrid>
    </div>
  );
};

export default Mentors;
