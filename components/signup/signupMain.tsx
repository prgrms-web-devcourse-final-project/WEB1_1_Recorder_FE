import { useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = object;

const SignupMain = ({}: Props) => {
  const router = useRouter();
  const [stack, setStack] = useState("");

  const handleStackClick = (selectedStack: string) => {
    setStack(selectedStack);
  };

  return (
    <div className="flex flex-col">
      <div className="mt-10 flex items-start p-2">
        <Label htmlFor="email">Email</Label>
      </div>
      <div className="flex w-full items-center space-x-2">
        <Input type="email" placeholder="Email" className="w-full" />
        <Button type="submit" className="bg-btnColor">
          verification
        </Button>
      </div>

      <div className="mt-5 flex items-start p-2">
        <Label htmlFor="Nickname">Nickname</Label>
      </div>
      <div className="flex w-full items-center space-x-2">
        <Input type="text" placeholder="Nickname" className="w-full" />
        <Button type="submit" className="bg-btnColor">
          duplicate
        </Button>
      </div>

      <div className="mt-5 flex items-start p-2">
        <Label htmlFor="stack">Stack</Label>
      </div>
      <div className="flex w-full items-center space-x-2">
        <Input
          type="text"
          id="stack"
          placeholder="Stack"
          className="w-full"
          value={stack}
          readOnly
        />
      </div>

      <div className="mt-5 flex justify-between">
        <Button
          className="w-[150px] bg-btnColor"
          onClick={() => handleStackClick("React")}
        >
          React
        </Button>
        <Button
          className="w-[150px] bg-btnColor"
          onClick={() => handleStackClick("Java")}
        >
          Java
        </Button>
        <Button
          className="w-[150px] bg-btnColor"
          onClick={() => handleStackClick("Spring")}
        >
          NextJS
        </Button>
      </div>

      <Button
        className="mt-20 bg-btnColor p-6 text-white"
        onClick={() => router.push("/")}
      >
        sign up
      </Button>
    </div>
  );
};

export default SignupMain;
