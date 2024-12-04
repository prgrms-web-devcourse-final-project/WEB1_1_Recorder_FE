import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
type Props = object;

const changeModal = ({}: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="change" className="bg-btnColor text-white">
          업적 변경
        </Button>
        
      </DialogTrigger>
      <DialogContent className="w-full h-5/6 overflow-auto">
        <DialogHeader>
          <DialogTitle>업적 변경하기</DialogTitle>
        </DialogHeader>
        <div className="flex justify-center gap-5">
            <Button className="text-white">채택률</Button>
            <Button className="text-white">N일 연속 답변</Button>
            <Button className="text-white">채택 답변 개수</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default changeModal;
