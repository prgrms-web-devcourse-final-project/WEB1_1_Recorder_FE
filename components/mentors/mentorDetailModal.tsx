import { ChatButton } from "@/components/mentors/chatButton";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { userImage } from "@/constants/user";
import { TMentorItem } from "@/types/mentorTypes";
import { Dispatch, SetStateAction } from "react";

type Props = {
  mentor: TMentorItem;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const MentorDetailModal = ({ mentor, open, setOpen }: Props) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="flex h-5/6 flex-col overflow-auto">
        <DialogHeader>
          <DialogTitle>{mentor.title}</DialogTitle>
        </DialogHeader>
        <div>
          <h3 className="pb-2 font-bold">멘토 정보</h3>
          <div className="flex justify-between rounded-lg border border-input px-4 py-2">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={mentor.profileImage || userImage} />
              </Avatar>
              <p>{mentor.nickName}</p>
            </div>
            <ul className="text-sm">
              <li>
                <span className="inline-block w-24 font-bold">라이브 피드백</span>
                <span>{mentor.liveFeedbackCount} 회</span>
              </li>
              <li>
                <span className="inline-block w-24 font-bold">답변 채택률</span>
                <span>{mentor.answerAcceptanceRate} %</span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="mb-3 font-bold">기술 스택</h3>
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {mentor.skillStacks.map((stack, i) => {
                return (
                  <div key={i} className="cursor-default rounded-md border px-2 py-1 text-sm">
                    {stack}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-bold">멘토 소개</h3>
          <div>{mentor.content}</div>
        </div>
        <div className="grow"></div>
        <ChatButton
          nickName={mentor.nickName}
          id={mentor.userId}
          img={mentor.profileImage}
          mentorId={mentor.mentorId}
        />
        <DialogClose onClick={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};

export { MentorDetailModal };
