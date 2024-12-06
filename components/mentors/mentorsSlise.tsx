"use client";
import { MentorDetailModal } from "@/components/mentors/mentorDetailModal";
import MentorSummaryItem from "@/components/mentors/mentorSummaryItem";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { mentorInfo } from "@/constants/user";
import { TMentorItem } from "@/types/mentorTypes";
import { useState } from "react";
import { ImFilesEmpty } from "react-icons/im";

type Props = {
  mentorList: TMentorItem[];
};
const MentorSlide = ({ mentorList }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">라이브 피드백</CardTitle>
        </CardHeader>
        <CardContent>
          {mentorList.length < 1 ? (
            <div className="flex h-72 w-full flex-col items-center justify-center">
              <p className="mb-5">아직 등록된 멘토가 없습니다.</p>
              <ImFilesEmpty size={80} color="gray" />
            </div>
          ) : (
            <Carousel>
              <CarouselContent className="h-72 p-2">
                {mentorList.map((mentor, i) => {
                  return (
                    <CarouselItem key={i} className="sm:basis-1/2 md:basis-1/3 xl:md:basis-1/5">
                      <MentorSummaryItem mentor={mentor} setOpen={setOpen} />
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="-left-4" />
              <CarouselNext className="-right-4" />
            </Carousel>
          )}
        </CardContent>
      </Card>
      <MentorDetailModal mentor={mentorInfo} open={open} setOpen={setOpen} />
    </>
  );
};
export { MentorSlide };
