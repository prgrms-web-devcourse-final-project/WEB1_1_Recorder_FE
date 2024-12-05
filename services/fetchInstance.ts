const fetchInstance = {
  get: async (endpoint: string, params: Record<string, any> = {}) => {
    return fetchInstance.fetch(endpoint, "GET", params);
  },
  post: async (endpoint: string, body: any, params: Record<string, any> = {}) => {
    return fetchInstance.fetch(endpoint, "POST", params, body);
  },
  put: async (endpoint: string, body: any, params: Record<string, any> = {}) => {
    return fetchInstance.fetch(endpoint, "PUT", params, body);
  },
  delete: async (endpoint: string, body: any, params: Record<string, any> = {}) => {
    return fetchInstance.fetch(endpoint, "DELETE", params, body);
  },
  patch: async (endpoint: string, body: any, params: Record<string, any> = {}) => {
    return fetchInstance.fetch(endpoint, "PATCH", params, body);
  },

  fetch: async (endpoint: string, method: string, params: Record<string, any> = {}, body?: any) => {
    const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`);

    Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

    const headers = {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_DEV_LOGIN_TOKEN}`,
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
  }
};

export default fetchInstance;
