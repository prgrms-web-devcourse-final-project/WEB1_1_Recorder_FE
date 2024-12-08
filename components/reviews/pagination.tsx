"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";
import { TRequestReviewList } from "@/types/reviewTypes";

type Props = {
  route: string;
  params: TRequestReviewList;
  prev: boolean;
  next: boolean;
  current: number;
  length: number;
};

const ReviewPagination = ({ route, params, prev, next, current, length }: Props) => {
  const searchParams = new URLSearchParams(params);

  const sethref = (page: number) => {
    searchParams.set("page", page.toString());
    return "/" + route + "?" + searchParams.toString();
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={sethref(current - 1)} className={prev ? "" : "hidden"} />
        </PaginationItem>
        {Array.from({ length: length || 0 }).map((_number, i) => {
          return (
            <PaginationItem key={i}>
              <PaginationLink isActive={current === i ? true : false} href={sethref(i)}>
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationNext href={sethref(current + 1)} className={next ? "" : "hidden"} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
export { ReviewPagination };
