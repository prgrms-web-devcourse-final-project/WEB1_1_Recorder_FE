import Modal from "@/components/modal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import getStackList from "@/services/getStackList";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useState } from "react";

type Props = {
  closeModal: () => void;
  isModalOpen: boolean;
  toggleStack: (stack: string) => void;
  current: string[];
};
const StacksModal = ({ closeModal, toggleStack, isModalOpen, current }: Props) => {
  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const { data } = useSuspenseQuery({ queryKey: ["stacks"], queryFn: getStackList });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase().trim());
    setSearch(e.target.value);
  };
  return (
    <Modal closeModal={closeModal} isModalOpen={isModalOpen}>
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>기술 스택 추가</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Input value={search} onChange={handleChange} placeholder="검색할 기술 스택을 입력해주세요" />
            </div>
            <div className="flex flex-wrap gap-2">
              {data.result.skillStacks.map((stack, index) =>
                searchQuery === "" || `${stack}${stack.toLowerCase().trim()}`.includes(searchQuery) ? (
                  <Button
                    key={index}
                    variant={current.includes(stack) ? "default" : "outline"}
                    disabled={!current.includes(stack) && current.length >= 3}
                    onClick={() => {
                      toggleStack(stack);
                    }}
                  >
                    {stack}
                  </Button>
                ) : null
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="outline" onClick={closeModal}>
            닫기
          </Button>
        </CardFooter>
      </Card>
    </Modal>
  );
};
export default StacksModal;
