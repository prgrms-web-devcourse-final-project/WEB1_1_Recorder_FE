import getApiUrl from "@/services/getApiUrl";
import { TResponsePopularReviewList, TResponseRecentReviewList, TResponseReviewList } from "@/types/reviewTypes";

/** 리뷰 목록을 불러오는 함수입니다.
 * @example const reviews = getReviewList({ type: 'DEBUG', page: 0, state: 'PENDING', stack: 'JAVASCRIPT', keyword: 'URLSearchParam',
})
 * @param params types: 질문 유형, page: 페이지 번호, state: 질문 상태, stack: 기술 스텍, keyword: 검색할 키워드
 */
const getReviewList = async (params: {
  type?: string;
  page: string;
  state?: string;
  stack?: string;
  keyword?: string;
}) => {
  const url = getApiUrl("/api/v1/question/list", params);
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN}`
    }
  });
  const data: TResponseReviewList = await res.json();
  console.log(data);
  return data.result.content;
};

/** 최근 리뷰 목록을 불러오는 함수입니다.
 * @example const reviews = getRecentReviewList({size: '3'})
 * @param params size: 받아올 질문 개수
 */
const getRecentReviewList = async (params: { size: string }) => {
  const url = getApiUrl("/api/v1/question/recent", params);
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN}`
    }
  });
  const data: TResponseRecentReviewList = await res.json();
  return data.result || [];
};

/** 인기 리뷰 목록을 불러오는 함수입니다.
 * @example const reviews = getPopularReviewList({size: '3', days: '7'})
 * @param params size: 받아올 질문 개수, days: 최근 며칠간의 데이터
 */
const getPopularReviewList = async (params: { size: string; days: string }) => {
  const url = getApiUrl("/api/v1/question/popular", params);
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN}`
    }
  });
  const data: TResponsePopularReviewList = await res.json();
  return data.result;
};

export { getReviewList, getRecentReviewList, getPopularReviewList };
