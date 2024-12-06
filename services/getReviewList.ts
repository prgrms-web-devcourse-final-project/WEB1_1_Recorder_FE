import fetchInstance from "@/services/fetchInstance";
import { TResponsePopularReviewList, TResponseRecentReviewList, TResponseReviewList } from "@/types/reviewTypes";

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
  try {
    const data: TResponseReviewList = await fetchInstance.get("/question/list", params, false);
    return data.result?.content || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

/** 최근 리뷰 목록을 불러오는 함수입니다.
 * @example const reviews = getRecentReviewList({size: '3'})
 * @param params size: 받아올 질문 개수
 */
const getRecentReviewList = async (params: { size: number }) => {
  try {
    const data: TResponseRecentReviewList = await fetchInstance.get("/question/recent", params, false);

    return data.result || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

/** 인기 리뷰 목록을 불러오는 함수입니다.
 * @example const reviews = getPopularReviewList({size: '3', days: '7'})
 * @param params size: 받아올 질문 개수, days: 최근 며칠간의 데이터
 */
const getPopularReviewList = async (params: { size: number; days: number }) => {
  try {
    const data: TResponsePopularReviewList = await fetchInstance.get("/question/popular", params, false);
    return data.result;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export { getReviewList, getRecentReviewList, getPopularReviewList };
