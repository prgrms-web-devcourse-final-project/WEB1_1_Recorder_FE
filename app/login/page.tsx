import SocielLogin from "@/components/login/socielLogin";
import Image from "next/image";
import logo from "@/public/svg/logo.svg";

const Login = () => {
  return (
    <div className="min-h flex flex-col items-center justify-center gap-12">
      <Image src={logo} alt="logo" width={300}></Image>
      <SocielLogin />
    </div>
  );
};

export default Login;
