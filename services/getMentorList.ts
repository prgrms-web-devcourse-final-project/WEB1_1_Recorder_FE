import getApiUrl from "@/services/getApiUrl";
import { TResponseMentorList } from "@/types/mentorTypes";

const getMentorList = async (params: { page: string }) => {
  const url = getApiUrl("/api/question/recent", params);
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN}`
    }
  });
  const data: TResponseMentorList = await res.json();
  return data.result?.content || [];
};
export { getMentorList };
