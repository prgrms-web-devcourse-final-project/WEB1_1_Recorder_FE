import { Badge } from "@/components/ui/badge";

type Props = {
  userTechs:
    | {
        id: number;
        name: string;
      }[]
    | [];
};

const myStack = ({ userTechs }: Props) => {
  return (
    <div className="mb-20 flex gap-2">
      {userTechs.length < 1 ? (
        <div>아직 선택한 기술 스택이 없습니다.</div>
      ) : (
        <>
          {userTechs.map((tech, i) => {
            return (
              <Badge className="px-4 py-3" key={i} variant="secondary">
                {tech.name}
              </Badge>
            );
          })}
        </>
      )}
    </div>
  );
};

export default myStack;
