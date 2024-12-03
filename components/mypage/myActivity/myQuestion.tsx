import Image from "next/image";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import PageHeader from "@/components/pageHeader";

type Props = {};

const MyQuestion = ({}: Props) => {
  const [items, setItems] = useState(Array.from({ length: 4 }));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (items.length >= 20) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      setItems((prevItems) => [...prevItems, ...Array.from({ length: 4 })]);
    }, 1500);
  };

  return (
    <div className="flex h-screen rounded-md border-2 overflow-hidden">
      <div className="flex h-full w-[260px] border-r-2 overflow-y-auto">
        <div className="flex w-full flex-col gap-2 space-y-2 p-4">
          <Button className="flex w-full items-center justify-center gap-x-2 bg-white text-black hover:bg-secondary">
            <Image src="/img/Shape.png" alt="" width={20} height={20} />
            나의 질문
          </Button>
          <Button className="flex w-full items-center justify-center gap-x-2 bg-white text-black hover:bg-secondary">
            <Image src="/img/Shape.png" alt="" width={20} height={20} />
            나의 답변
          </Button>
          <Button className="flex w-full items-center justify-center gap-x-2 bg-white text-black hover:bg-secondary">
            <Image src="/img/Shape.png" alt="" width={20} height={20} />
            채택된 답변
          </Button>
        </div>
      </div>

      <div className="w-5/6 p-10 overflow-y-auto">
        <PageHeader title="나의 질문" />
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            <div className="flex justify-center mt-5">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2.5 h-2.5 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                <div className="w-2.5 h-2.5 bg-gray-400 rounded-full animate-bounce delay-300"></div>
              </div>
            </div>
          }
          endMessage={
            <p className="text-center mt-5 text-gray-500">
              더 이상 표시할 항목이 없습니다
            </p>
          }
          height={"calc(100vh - 80px)"}
        >
          {items.map((_, index) => (
            <div
              key={index}
              className="flex flex-col w-full border-2 rounded-xl mt-10 p-10"
            >
              <div className="flex items-center gap-5">
                <Skeleton className="h-[50px] w-[50px] rounded-[100%]" />
                <Skeleton className="h-[20px] w-80" />
              </div>
              <div className="space-y-2 mt-5">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default MyQuestion;
