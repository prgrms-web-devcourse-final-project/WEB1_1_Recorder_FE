import fetchInstance from "@/services/fetchInstance";
import { TResponseMentorList } from "@/types/mentorTypes";

/** 멘토 목록을 불러오는 함수입니다.
 * @example const mentors = getMentorList({page: '1'})
 * @param params page: 페이지 번호
 */
const getMentorList = async (params: { page: string }) => {
  try {
    params.page = params.page ?? 0;
    const data: TResponseMentorList = await fetchInstance.get("/mentor", params);
    return data;
  } catch (error) {
    return null;
  }
};

/** 멘토를 등록하는 함수입니다.
 * @example
 * @param params
 */
const enrollMentor = async (params: { title: string; content: string; skillStacks: string[] }) => {
  try {
    const data = await fetchInstance.post("/mentor", params);
    return data;
  } catch (error) {}
};

export { getMentorList, enrollMentor };
