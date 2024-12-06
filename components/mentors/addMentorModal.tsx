"use client";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { userImage } from "@/constants/user";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SearchSelect from "@/components/reviews/searchSelect";
import { FormEvent, useEffect, useState } from "react";
import { enrollMentor } from "@/services/getMentorList";
import { FaExclamation } from "react-icons/fa6";

const AddMentorModal = () => {
  const [stack, setstack] = useState("");
  const [stackList, setStackList] = useState<string[]>([]);
  const [alert, setAlert] = useState("hidden");
  const [text, setText] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    if (title.length < 1 || content.length < 1 || stackList.length < 1) {
      setText("내용을 모두 입력해주세요!");
      setAlert("show");
      setTimeout(() => {
        setAlert("hidden");
      }, 3000);
    } else {
      await enrollMentor({ title: title, content: content, skillStacks: stackList });
      window.location.reload();
    }
  };

  const handleDelete = (stack: string) => {
    const updatedList = stackList.filter((s) => s !== stack);
    setStackList(updatedList);
  };

  useEffect(() => {
    if (stackList.length === 3) {
      setText("기술 스택은 3개까지만 추가할 수 있습니다!");
      setAlert("show");
      setTimeout(() => {
        setAlert("hidden");
      }, 3000);
    } else if (stackList.includes(stack)) {
    } else {
      if (!(stack === "")) {
        setStackList([...stackList, stack]);
      }
    }
  }, [stack]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-white" size="lg">
          멘토 등록하기
        </Button>
      </DialogTrigger>
      <DialogContent className="h-5/6 overflow-auto">
        <DialogHeader>
          <DialogTitle>멘토 세부 정보를 입력해주세요</DialogTitle>
        </DialogHeader>
        <div>
          <h3 className="font-bold">사용자 정보</h3>
          <div className="mt-3 flex justify-between rounded-lg border border-input px-4 py-2">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={userImage} />
              </Avatar>
              <p>userName</p>
            </div>
            <ul className="text-sm">
              <li>
                <span className="inline-block w-24 font-bold">라이브 피드백</span>
                <span>13 회</span>
              </li>
              <li>
                <span className="inline-block w-24 font-bold">답변 채택률</span>
                <span>50 %</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={`h-3`}>
          <div className={`flex items-center text-sm text-primary ${alert}`}>
            <FaExclamation />
            {text}
          </div>
        </div>
        <div>
          <h3 className="mb-3 font-bold">기술 스택</h3>
          <div className="flex items-center justify-between">
            {stackList.length < 1 ? (
              <div className="pl-2 text-xs text-gray-500">기술 스택을 추가해 보세요!</div>
            ) : (
              <div className="flex gap-2">
                {stackList.map((stack, i) => {
                  return (
                    <div key={i} className="cursor-default rounded-md border px-2 py-1 text-sm">
                      {stack}{" "}
                      <span className="cursor-pointer text-primary" onClick={() => handleDelete(stack)}>
                        x
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
            <SearchSelect state={stack} setState={setstack} placeholder="기술 스택을 입력해보세요." type="one" />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <h3 className="font-bold">멘토 소개</h3>
            <Label>제목</Label>
            <Input className="mb-2" name="title" placeholder="제목을 입력해주세요." />
            <Label>본문</Label>
            <Textarea className="h-36 resize-none" name="content" placeholder="내용을 입력해주세요." />
          </div>
          <Button className="mt-4 w-full text-white" type="submit">
            등록하기
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddMentorModal;
