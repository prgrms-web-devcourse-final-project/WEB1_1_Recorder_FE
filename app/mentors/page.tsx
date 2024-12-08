import AddMentorModal from "@/components/mentors/addMentorModal";
import MentorGrid from "@/components/mentors/mentorGrid";
import PageHeader from "@/components/pageHeader";
import { ApiPagination } from "@/components/reviews/apiPagination";
import { getMentorList } from "@/services/getMentorList";
import { TMentorItem, TResponseMentorList } from "@/types/mentorTypes";

type Props = {
  searchParams: Promise<{ page: string }>;
};

const Mentors = async ({ searchParams }: Props) => {
  const params = await searchParams;
  const mentorListResponse = await getMentorList(params);
  console.log(params);
  return (
    <div className="m-auto max-w px-4 lg:px-20">
      <PageHeader title="라이브 피드백 멘토">
        <AddMentorModal />
      </PageHeader>
      <MentorGrid mentorList={mentorListResponse?.result.content || []} className="my-10"></MentorGrid>
      <ApiPagination
        route={"mentors"}
        params={params}
        prev={mentorListResponse?.result.prev || false}
        next={mentorListResponse?.result.next || false}
        current={mentorListResponse?.result.currentPage || 0}
        length={mentorListResponse?.result.endPage || 0}
      />
    </div>
  );
};

export default Mentors;
