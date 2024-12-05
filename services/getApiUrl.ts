/** api url을 만들어주는 함수입니다.
 * @example const url = getApiUrl("/api/v1/question/list", {page: '1'});
 */
const getApiUrl = (endpoint: string, params: { [key: string]: string }) => {
  const searchParams = new URLSearchParams(params);
  return process.env.NEXT_PUBLIC_API_URL + endpoint + "?" + searchParams.toString();
};
export default getApiUrl;
