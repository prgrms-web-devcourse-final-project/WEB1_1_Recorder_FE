import SocielLogin from "@/components/socialLogin/login";
import Image from "next/image";
import logo from "@/public/svg/logo.svg";

const Login = () => {
  return (
    <div className="flex h-[calc(100vh-320px)] flex-col items-center justify-center gap-12">
      <Image src={logo} alt="logo" width={300}></Image>
      <SocielLogin />
    </div>
  );
};

export default Login;
