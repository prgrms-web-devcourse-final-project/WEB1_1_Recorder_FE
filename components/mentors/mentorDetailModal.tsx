import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { userImage } from "@/constants/user";

const MentorDetailModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-white" size="lg">
          멘토 상세 보기
        </Button>
      </DialogTrigger>
      <DialogContent className="h-5/6 overflow-auto">
        <DialogHeader>
          <DialogTitle>제목입니다</DialogTitle>
        </DialogHeader>
        <div>
          <h3 className="font-bold">멘토 정보</h3>
          <div className="mt-3 flex justify-between rounded-lg border border-input px-4 py-2">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={userImage} />
              </Avatar>
              <p>userName</p>
            </div>
            <ul className="text-sm">
              <li>
                <span className="inline-block w-24 font-bold">답변 채택률</span>
                <span>50 %</span>
              </li>
              <li>
                <span className="inline-block w-24 font-bold">라이브 피드백</span>
                <span>13 회</span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="mb-3 font-bold">기술 스택</h3>
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {["react", "typescript"].map((stack, i) => {
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
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam asperiores sunt quasi vitae ex libero
            delectus nostrum molestias obcaecati est? Suscipit tenetur in voluptatum sequi mollitia voluptas similique
            adipisci quos.
          </div>
        </div>
        <Button className="mt-4 w-full text-white" type="submit">
          1:1 채팅 하기
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export { MentorDetailModal };
