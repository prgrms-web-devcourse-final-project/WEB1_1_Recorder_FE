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
    // <div className="flex h-screen overflow-hidden rounded-md border-2">
    //   <div className="w-5/6 overflow-y-auto p-10">
    //     <PageHeader title="나의 질문" />
    //     <div className="w-full text-en">아직 질문 기록이 없습니다</div>

    //     {/* <InfiniteScroll
    //       dataLength={items.length}
    //       next={fetchMoreData}
    //       hasMore={hasMore}
    //       loader={
    //         <div className="mt-5 flex justify-center">
    //           <div className="flex items-center gap-2">
    //             <div className="h-2.5 w-2.5 animate-bounce rounded-full bg-gray-400 delay-100"></div>
    //             <div className="h-2.5 w-2.5 animate-bounce rounded-full bg-gray-400 delay-200"></div>
    //             <div className="h-2.5 w-2.5 animate-bounce rounded-full bg-gray-400 delay-300"></div>
    //           </div>
    //         </div>
    //       }
    //       endMessage={<p className="mt-5 text-center text-gray-500">더 이상 표시할 항목이 없습니다</p>}
    //       height={"calc(100vh - 80px)"}
    //     >
    //       {items.map((_, index) => (
    //         <div key={index} className="mt-10 flex w-full flex-col rounded-xl border-2 p-10">
    //           <div className="flex items-center gap-5">
    //             <Skeleton className="h-[50px] w-[50px] rounded-[100%]" />
    //             <Skeleton className="h-[20px] w-80" />
    //           </div>
    //           <div className="mt-5 space-y-2">
    //             <Skeleton className="h-4 w-full" />
    //             <Skeleton className="h-4 w-full" />
    //           </div>
    //         </div>
    //       ))}
    //     </InfiniteScroll> */}
    //   </div>
    // </div>
    <div className="flex justify-center">
      <div>아직 질문 기록이 없습니다.</div>
    </div>
  );
};

export default MyQuestion;
