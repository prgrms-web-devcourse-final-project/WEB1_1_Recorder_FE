import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
type Props = object;

const myEditMember = ({}: Props) => {
  const router = useRouter();

  return (
    <div className="flex flex-col">
      <div className="mt-10 flex items-start p-2">
        <Label htmlFor="Nickname">Nickname</Label>
      </div>
      <div className="flex w-full items-center space-x-2">
        <Input type="Nickname" placeholder="Nickname" className="w-full" />
      </div>

      <div className="mt-5 flex items-start p-2">
        <Label htmlFor="Nickname">Introduction</Label>
      </div>
      <div className="flex w-full items-center space-x-2">
        <Input type="text" placeholder="Content" className="h-40 w-full" />
      </div>

      <Button className="mt-5 bg-btnColor p-6 text-white" onClick={() => router.push("/myPage")}>
        edit
      </Button>
    </div>
  );
};

export default myEditMember;
