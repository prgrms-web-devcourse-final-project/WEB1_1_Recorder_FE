import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
type Props = object;

const changeModal = ({}: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="change" className="bg-btnColor text-white">
          도전과제 변경
        </Button>
      </DialogTrigger>
      <DialogContent className="h-5/6 w-full overflow-auto">
        <DialogHeader>
          <DialogTitle>도전과제 변경하기</DialogTitle>
        </DialogHeader>
        <div className="flex items-end justify-center gap-5">
          <Button className="text-white">채택 답변 개수</Button>
          <Button className="text-white">누적 추천 수</Button>
          <Button className="text-white">N일 연속 답변</Button>
        </div>
        <div className="flex justify-center gap-5 mb-40">
          <Button className="text-white">받은 리뷰 요청 수</Button>
          <Button className="text-white">채택률</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default changeModal;
