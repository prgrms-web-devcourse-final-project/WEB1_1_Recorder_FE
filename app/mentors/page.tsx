"use client";
import AddMentorModal from "@/components/mentors/addMentorModal";
import { MentorDetailModal } from "@/components/mentors/mentorDetailModal";
import MentorGrid from "@/components/mentors/mentorGrid";
import PageHeader from "@/components/pageHeader";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext
} from "@/components/ui/pagination";
import { mentorInfo } from "@/constants/user";
import { getMentorList } from "@/services/getMentorList";
import { TMentorItem, TResponseMentorList } from "@/types/mentorTypes";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { number } from "zod";

const Mentors = () => {
  const params = useSearchParams();
  const page = !isNaN(parseInt(params.get("page") || "0", 10)) ? parseInt(params.get("page") || "0", 10) : 0;
  const [open, setOpen] = useState(false);
  const [mentorList, setMentorList] = useState<TMentorItem[] | []>([]);
  const [response, setRespones] = useState<TResponseMentorList | null>();

  useEffect(() => {
    const fetchData = async () => {
      const data: TResponseMentorList | null = await getMentorList({ page: page });
      setMentorList(data?.result.content || []);
      setRespones(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data: TResponseMentorList | null = await getMentorList({ page: page });
      setMentorList(data?.result.content || []);
      setRespones(data);
    };
    fetchData();
  }, [page]);

  return (
    <div className="m-auto max-w px-4 lg:px-20">
      <PageHeader title="라이브 피드백 멘토">
        <AddMentorModal />
      </PageHeader>
      <MentorDetailModal mentor={mentorInfo} open={open} setOpen={setOpen} />
      <MentorGrid mentorList={mentorList} className="my-10" setOpen={setOpen}></MentorGrid>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={
                response?.result.currentPage != null ? `/mentors?page=${response?.result.currentPage - 1}` : "/mentors"
              }
              className={response?.result.prev ? "" : "hidden"}
            />
          </PaginationItem>
          {Array.from({ length: response?.result.size || 0 }).map((_number, i) => {
            return (
              <PaginationItem key={i}>
                <PaginationLink isActive={page === i ? true : false} href={`/mentors?page=${i + 1}`}>
                  1
                </PaginationLink>
              </PaginationItem>
            );
          })}
          <PaginationItem>
            <PaginationNext
              href={
                response?.result.currentPage != null ? `/mentors?page=${response?.result.currentPage + 1}` : "/mentors"
              }
              className={response?.result.next ? "" : "hidden"}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Mentors;
