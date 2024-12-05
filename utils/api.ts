const API_BASE_URL = 'http://localhost:8080';

export const fetchWithAuth = async (endpoint: string, options: RequestInit = {}) => {
  const accessToken = localStorage.getItem('accessToken');
  
  const headers = {
    ...options.headers,
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (response.status === 401) {
    // 토큰이 만료된 경우 리프레시 토큰으로 새로운 액세스 토큰 발급
    const refreshToken = localStorage.getItem('refreshToken');
    // 리프레시 토큰 로직 구현
    // ...
  }

  return response;
}; 