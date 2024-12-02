import MentorSummaryItem from "@/components/mentors/mentorSummaryItem";
import { Mentor } from "@/types/mentorTypes";

type Props = {
  mentorList: Mentor[];
  className: string;
};

const MentorGrid = ({ mentorList, className }: Props) => {
  return (
    <div className={`grid grid-cols-3 gap-4 ${className}`}>
      {mentorList.map((mentor, i) => {
        return <MentorSummaryItem key={i} mentor={mentor}></MentorSummaryItem>;
      })}
    </div>
  );
};

export default MentorGrid;
