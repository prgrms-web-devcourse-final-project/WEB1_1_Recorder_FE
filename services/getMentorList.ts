import getApiUrl from "@/services/getApiUrl";
import { TRequestMentor, TResponseMentorList } from "@/types/mentorTypes";

/** 멘토 목록을 불러오는 함수입니다.
 * @example const mentors = getMentorList({page: '1'})
 * @param params page: 페이지 번호
 */
const getMentorList = async (params: { page: string }) => {
  const url = getApiUrl("/api/v1/mentor", params);
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  });
  const data: TResponseMentorList = await res.json();
  return data.result?.content || [];
};

const enrollMentor = async (content: TRequestMentor) => {
  const url = getApiUrl("/api/v1/mentor", {});
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_DEV_LOGIN_TOKEN}`
    },
    body: JSON.stringify(content)
  });
  const data = await res.json();
};

export { getMentorList, enrollMentor };
