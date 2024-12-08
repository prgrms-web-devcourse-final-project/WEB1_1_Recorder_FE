"use client";
import AddMentorModal from "@/components/mentors/addMentorModal";
import { MentorDetailModal } from "@/components/mentors/mentorDetailModal";
import MentorGrid from "@/components/mentors/mentorGrid";
import PageHeader from "@/components/pageHeader";
import { mentorInfo } from "@/constants/user";
import { getMentorList } from "@/services/getMentorList";
import { TMentorItem } from "@/types/mentorTypes";
import { useEffect, useState } from "react";

const Mentors = () => {
  const [open, setOpen] = useState(false);
  const [mentorList, setMentorList] = useState<TMentorItem[] | []>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getMentorList({ page: 0 });
      setMentorList(data);
    };
    fetchData();
  }, []);

  return (
    <div className="m-auto max-w px-4 lg:px-20">
      <PageHeader title="라이브 피드백 멘토">
        <AddMentorModal />
      </PageHeader>
      <MentorDetailModal mentor={mentorInfo} open={open} setOpen={setOpen} />
      <MentorGrid mentorList={mentorList} className="my-10" setOpen={setOpen}></MentorGrid>
    </div>
  );
};

export default Mentors;
