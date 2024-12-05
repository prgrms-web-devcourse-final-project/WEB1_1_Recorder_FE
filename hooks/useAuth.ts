import { useState, useEffect } from 'react';
import { AuthTokens, ApiResponse } from "@/types/auths";
import { API } from "@/constants/api";

export const useAuth = () => {
  const [tokens, setTokens] = useState<AuthTokens | null>(null);

  const saveTokens = async (accessToken: string, refreshToken: string) => {
    // 토큰 저장
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    setTokens({ accessToken, refreshToken });

    // 최초 로그인 체크 API 호출
    try {
      const response = await fetch(`${API.BASE_URL}${API.AUTH.FIRST_LOGIN}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      const data: ApiResponse<number> = await response.json();
      return data.result === 1;
    } catch (error) {
      console.error('First login check failed:', error);
      return false;
    }
  };

  const refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) return null;

    try {
      const response = await fetch(`${API.BASE_URL}${API.AUTH.REFRESH}`, {
        method: 'POST',
        headers: {
          'Authorization-refresh': `Bearer ${refreshToken}`
        }
      });
      
      if (response.ok) {
        const newAccessToken = response.headers.get('Authorization')?.replace('Bearer ', '');
        if (newAccessToken) {
          localStorage.setItem('accessToken', newAccessToken);
          setTokens(prev => prev ? { ...prev, accessToken: newAccessToken } : null);
          return newAccessToken;
        }
      }
    } catch (error) {
      console.error('Token refresh failed:', error);
    }
    return null;
  };

  const logout = async () => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      try {
        await fetch(`${API.BASE_URL}${API.AUTH.LOGOUT}`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });
      } catch (error) {
        console.error('Logout failed:', error);
      }
    }
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setTokens(null);
  };

  return { tokens, saveTokens, refreshAccessToken, logout };
}; 