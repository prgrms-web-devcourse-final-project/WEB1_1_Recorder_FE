"use client";

import SignupHeader from "@/components/signup/signupHeader";
import SignupMain from "@/components/signup/signupMain";

type Props = object;

const signUp = ({}: Props) => {

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex h-screen w-full max-w-4xl flex-col items-center justify-center">
        <div className="relative w-[600px] p-[40px]">
          <SignupHeader />
          <SignupMain />
        </div>
      </div>
    </div>
  );
};

export default signUp;
