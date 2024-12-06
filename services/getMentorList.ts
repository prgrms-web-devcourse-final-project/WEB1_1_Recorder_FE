import fetchInstance from "@/services/fetchInstance";
import { TResponseMentorList } from "@/types/mentorTypes";

/** 멘토 목록을 불러오는 함수입니다.
 * @example const mentors = getMentorList({page: '1'})
 * @param params page: 페이지 번호
 */
const getMentorList = async (params: { page: number }) => {
  try {
    const data: TResponseMentorList = await fetchInstance.get("/mentor", params, false);
    return data.result?.content || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

/** 멘토를 등록하는 함수입니다.
 * @example
 * @param params
 */
const enrollMentor = async (params: { title: string; content: string; skillStacks: string[] }) => {
  try {
    console.log(params);
    // await fetchInstance.post("/mentor", params);
  } catch (error) {
    console.error(error);
  }
};

export { getMentorList, enrollMentor };
