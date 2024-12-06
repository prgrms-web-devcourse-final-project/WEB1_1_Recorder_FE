import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
type Props = object;

const signupMain = ({}: Props) => {
  const router = useRouter();
  return (
    <div className="flex flex-col">
      <div className="mt-10 flex items-start p-2">
        <Label htmlFor="email">Email</Label>
      </div>
      <div className="flex w-full items-center space-x-2">
        <Input type="email" placeholder="Email" className="w-full" />
        <Button type="submit" className="bg-btnColor">verification</Button>
      </div>

      <div className="mt-5 flex items-start p-2">
        <Label htmlFor="Nickname">Nickname</Label>
      </div>
      <div className="flex w-full items-center space-x-2">
        <Input type="Nickname" placeholder="Nickname" className="w-full" />
        <Button type="submit" className="bg-btnColor">duplicate</Button>
      </div>

      <div className="mt-5 flex items-start p-2">
        <Label htmlFor="stack">Stack</Label>
      </div>
      <div className="flex w-full items-center space-x-2">
        <Input type="stack" placeholder="Stack" className="w-full" />
      </div>

      <div className="mt-5 flex justify-between">
        <Button className="w-[150px] bg-btnColor">React</Button>
        <Button className="w-[150px] bg-btnColor">Java</Button>
        <Button className="w-[150px] bg-btnColor">Spring</Button>
      </div>

      <Button className="mt-20 bg-btnColor p-6 text-white" onClick={() => router.push("/")}>
        sign in
      </Button>
    </div>
  );
};

export default signupMain;
