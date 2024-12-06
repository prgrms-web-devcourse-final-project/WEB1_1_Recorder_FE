import MentorSummaryItem from "@/components/mentors/mentorSummaryItem";
import { TMentorItem } from "@/types/mentorTypes";
import { Dispatch, SetStateAction } from "react";
import { ImFilesEmpty } from "react-icons/im";

type Props = {
  mentorList: TMentorItem[] | [];
  className: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const MentorGrid = ({ mentorList, className, setOpen }: Props) => {
  return (
    <>
      {mentorList.length < 1 ? (
        <div className="flex h-96 w-full flex-col items-center justify-center">
          <p className="mb-5">아직 등록된 멘토가 없습니다.</p>
          <ImFilesEmpty size={80} color="gray" />
        </div>
      ) : (
        <div className={`grid grid-cols-3 gap-4 ${className}`}>
          {mentorList.map((mentor, i) => {
            return <MentorSummaryItem key={i} mentor={mentor} setOpen={setOpen}></MentorSummaryItem>;
          })}
        </div>
      )}
    </>
  );
};

export default MentorGrid;
