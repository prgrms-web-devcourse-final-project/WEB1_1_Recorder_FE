import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
type Props = object;

const ComponentName = ({}: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>업적 변경</Button>
      </DialogTrigger>
      <DialogContent className="w-full h-5/6 overflow-auto">
        <DialogHeader>
          <DialogTitle>업적 변경하기</DialogTitle>
        </DialogHeader>
        <div className="flex justify-center gap-5">
            <Button className="text-white">채택된 답변 수</Button>
            <Button className="text-white">누적 추천 수</Button>
            <Button className="text-white">좋아요 수</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ComponentName;
