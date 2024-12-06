const fetchUtil = async (endpoint: string, method: string, params: Record<string, any> = {}, body?: any) => {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`);

  Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

  const headers = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_DEV_LOGIN_TOKEN}`, //추후 로컬스토리지에서 토큰을 가져오도록 수정
    "Content-Type": "application/json"
  };
  const response = await fetch(url.toString(), {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined
  });
  if (!response.ok) {
    const errorData = await response.json();
    const errorMessage = errorData.message || `Status: ${response.status}`;
    throw new Error(errorMessage);
  }
  return response.json();
};

const fetchInstance = {
  get: (endpoint: string, params: Record<string, any> = {}) => {
    return fetchUtil(endpoint, "GET", params);
  },
  post: (endpoint: string, body: any, params: Record<string, any> = {}) => {
    return fetchUtil(endpoint, "POST", params, body);
  },
  put: (endpoint: string, body: any, params: Record<string, any> = {}) => {
    return fetchUtil(endpoint, "PUT", params, body);
  },
  delete: (endpoint: string, body: any, params: Record<string, any> = {}) => {
    return fetchUtil(endpoint, "DELETE", params, body);
  },
  patch: (endpoint: string, body: any, params: Record<string, any> = {}) => {
    return fetchUtil(endpoint, "PATCH", params, body);
  }
};

export default fetchInstance;
