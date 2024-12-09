import { cookies } from "next/headers";

const checkAuth = async () => {
  const cookieStore = await cookies();
  const isLogin = Boolean(cookieStore.get("accessToken"));
  return isLogin;
};

export default checkAuth;
