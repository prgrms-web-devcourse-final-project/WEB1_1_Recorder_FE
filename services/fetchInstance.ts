const fetchUtil = async (
  endpoint: string,
  method: string,
  params: Record<string, any> = {},
  body?: any,
  token?: boolean
) => {
  const isToken = token ?? true;
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`);

  Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

  const headers = {
    ...(isToken && { Authorization: `Bearer ${process.env.NEXT_PUBLIC_DEV_LOGIN_TOKEN}` }), //추후 로컬스토리지에서 토큰을 가져오도록 수정
    "Content-Type": "application/json"
  };
  const response = await fetch(url.toString(), {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined
  });
  if (!response.ok) {
    const errorMessage = `Status: ${response.status}`;
    throw new Error(errorMessage);
  }
  return response.json();
};

const fetchInstance = {
  get: async (endpoint: string, params: Record<string, any> = {}, token?: boolean) => {
    return fetchUtil(endpoint, "GET", params, undefined, token);
  },
  post: async (endpoint: string, body: any, params: Record<string, any> = {}) => {
    return fetchUtil(endpoint, "POST", params, body);
  },
  put: async (endpoint: string, body: any, params: Record<string, any> = {}) => {
    return fetchUtil(endpoint, "PUT", params, body);
  },
  delete: async (endpoint: string, body: any, params: Record<string, any> = {}) => {
    return fetchUtil(endpoint, "DELETE", params, body);
  },
  patch: async (endpoint: string, body: any, params: Record<string, any> = {}) => {
    return fetchUtil(endpoint, "PATCH", params, body);
  }
};

export default fetchInstance;
