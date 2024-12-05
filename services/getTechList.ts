import getApiUrl from "@/services/getApiUrl";
import { TResponseTechList } from "@/types/userTypes";

const getTechList = async () => {
  const url = getApiUrl("/api/v1/tech", {});
  const res = await fetch(url, {
    method: "GET"
  });
  const data: TResponseTechList = await res.json();
  return data.result?.skillStacks || [];
};

export { getTechList };
