import { Badge } from "@/components/ui/badge";
type Props = object;

const ComponentName = ({ }: Props) => {
  return (
<div className="mt-2 flex gap-2">
    <Badge variant="secondary">react</Badge>
    <Badge variant="secondary">Java</Badge>
    <Badge variant="secondary">Nextjs</Badge>
    </div>
  );
};

export default ComponentName;