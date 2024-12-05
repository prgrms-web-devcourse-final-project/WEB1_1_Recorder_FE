/** api url을 만들어주는 함수입니다.
 * @example const url = getApiUrl("/api/v1/question/list", {page: '1'});
 */
const getApiUrl = (endpoint: string, params: { [key: string]: string }) => {
  const API_URL = typeof window === "undefined" ? process.env.API_URL : process.env.NEXT_PUBLIC_API_URL;
  const searchParams = new URLSearchParams(params);

  return API_URL + endpoint + "?" + searchParams.toString();
};
export default getApiUrl;
