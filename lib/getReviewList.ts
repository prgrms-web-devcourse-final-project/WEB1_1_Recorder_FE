import { ReviewItem } from "@/types/reviewTypes";

/** 리뷰 목록을 불러오는 함수입니다.
 * @example const reviews = getReviewList({ type: 'DEBUG', page: 0, state: 'PENDING', stack: 'JAVASCRIPT', keyword: 'URLSearchParam',
})
 * @param params types: 질문 유형, page: 페이지 번호, state: 질문 상태, stack: 기술 스텍, keyword: 검색할 키워드
 */
const getReviewList = async (params: {
  type?: string;
  page: number;
  state?: string;
  stack?: string;
  keyword?: string;
}) => {
  const res = await fetch("api/question/list", { method: "GET" });
  const data = await res.json();
  return data;
};

/** 인기 리뷰 목록을 불러오는 함수입니다.
 * @example const reviews = getPopularReviewList({size: 3, days: 7})
 * @param params size: 받아올 질문 개수, days: 최근 며칠간의 데이터
 */
const getPopularReviewList = async (params: { size: number; days: number }) => {
  const res = await fetch("api/question/popular", { method: "GET" });
  const data = await res.json();
  return data;
};

/** 최근 리뷰 목록을 불러오는 함수입니다.
 * @example const reviews = getRecentReviewList({size: 3})
 * @param params size: 받아올 질문 개수
 */
const getRecentReviewList = async (params: { size: number }) => {
  const res = await fetch("api/question/recent", { method: "GET" });
  const data: ReviewItem[] = await res.json();
  return data;
};

export { getReviewList, getPopularReviewList, getRecentReviewList };
