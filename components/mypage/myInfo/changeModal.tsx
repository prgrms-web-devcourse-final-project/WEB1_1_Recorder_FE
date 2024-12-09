import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
type Props = object;
import Image from "next/image";
const changeModal = ({}: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Badge variant="secondary" className="hover:none cursor-pointer px-2 py-1">
          업적 변경
        </Badge>
      </DialogTrigger>
      <DialogContent className="h-5/6 w-full overflow-auto">
        <DialogHeader>
          <DialogTitle>업적 변경하기</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 p-10">
          <div className="flex justify-between gap-4">
            <Badge className="w-1/3 px-2 py-1">
              <Image src="/img/bronze.png" alt="" width={15} height={15} />
              <span className="pl-2">채택률</span>
            </Badge>
            <Badge className="w-1/3 px-2 py-1" variant="secondary">
              <Image src="/img/silver.png" alt="" width={15} height={15} />
              <span className="pl-2">채택률</span>
            </Badge>
            <Badge className="w-1/3 px-2 py-1" variant="secondary">
              <Image src="/img/gold.png" alt="" width={15} height={15} />
              <span className="pl-2">채택률</span>
            </Badge>
          </div>
          <div className="flex justify-between gap-4">
            <Badge className="w-1/3 px-2 py-1">
              <Image src="/img/bronze.png" alt="" width={15} height={15} />
              <span className="pl-2">N일 연속 답변</span>
            </Badge>
            <Badge className="w-1/3 px-2 py-1">
              <Image src="/img/silver.png" alt="" width={15} height={15} />
              <span className="pl-2">N일 연속 답변</span>
            </Badge>
            <Badge className="w-1/3 px-2 py-1" variant="secondary">
              <Image src="/img/gold.png" alt="" width={15} height={15} />
              <span className="pl-2">N일 연속 답변</span>
            </Badge>
          </div>
          <div className="flex justify-between gap-4">
            <Badge className="w-1/3 px-2 py-1">
              <Image src="/img/bronze.png" alt="" width={15} height={15} />
              <span className="pl-2">채택 답변수</span>
            </Badge>
            <Badge className="w-1/3 px-2 py-1" variant="secondary">
              <Image src="/img/silver.png" alt="" width={15} height={15} />
              <span className="pl-2">채택 답변수</span>
            </Badge>
            <Badge className="w-1/3 px-2 py-1" variant="secondary">
              <Image src="/img/gold.png" alt="" width={15} height={15} />
              <span className="pl-2">채택 답변수</span>
            </Badge>
          </div>
          <div className="flex justify-between gap-4">
            <Badge className="w-1/3 px-2 py-1">
              <Image src="/img/bronze.png" alt="" width={15} height={15} />
              <span className="pl-2">누적 추천수</span>
            </Badge>
            <Badge className="w-1/3 px-2 py-1" variant="secondary">
              <Image src="/img/silver.png" alt="" width={15} height={15} />
              <span className="pl-2">누적 추천수</span>
            </Badge>
            <Badge className="w-1/3 px-2 py-1" variant="secondary">
              <Image src="/img/gold.png" alt="" width={15} height={15} />
              <span className="pl-2">누적 추천수</span>
            </Badge>
          </div>
          <div className="flex justify-between gap-4">
            <Badge className="w-1/3 px-2 py-1">
              <Image src="/img/bronze.png" alt="" width={15} height={15} />
              <span className="pl-2">받은 리뷰수</span>
            </Badge>
            <Badge className="w-1/3 px-2 py-1" variant="secondary">
              <Image src="/img/silver.png" alt="" width={15} height={15} />
              <span className="pl-2">받은 리뷰수</span>
            </Badge>
            <Badge className="w-1/3 px-2 py-1" variant="secondary">
              <Image src="/img/gold.png" alt="" width={15} height={15} />
              <span className="pl-2">받은 리뷰수</span>
            </Badge>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default changeModal;
