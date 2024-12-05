export interface AuthTokens {
    accessToken: string;
    refreshToken: string;
  }
  
  export interface ApiResponse<T = any> {
    message: string;
    result: T;
  } 