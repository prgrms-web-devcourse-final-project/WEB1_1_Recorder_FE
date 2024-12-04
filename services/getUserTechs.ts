import getApiUrl from "@/services/getApiUrl";
import { TResponseUserTechs } from "@/types/userTypes";

const getUserTechs = async () => {
  const url = getApiUrl("/api/v1/user/tech", {});
  const res = await fetch(url, {
    method: "GET",
    headers: { Accept: "application/json", Authorization: `Bearer ${process.env.API_TOKEN}` }
  });
  const data: TResponseUserTechs = await res.json();
  return data.result?.stacks || [];
};

export { getUserTechs };
