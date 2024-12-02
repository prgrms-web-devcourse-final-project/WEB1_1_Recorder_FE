import { Badge } from "@/components/ui/badge";
type Props = object;

const ComponentName = ({ }: Props) => {
  return (
<div className="mt-2 flex gap-2">
    <Badge variant="outline">react</Badge>
    <Badge variant="outline">Java</Badge>
    <Badge variant="outline">Nextjs</Badge>
    </div>
  );
};

export default ComponentName;