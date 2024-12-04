"use client";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { userImage } from "@/constants/user";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SearchSelect from "@/components/reviews/searchSelect";
import { FormEvent, FormEventHandler, useState } from "react";
import { techStackList } from "@/constants/reviews";

type Props = {};

const AddMentorModal = ({}: Props) => {
  const [stack, setstack] = useState("추가하기");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
  };

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
          <div className="flex justify-between rounded-lg border border-input px-4 py-2">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={userImage} />
              </Avatar>
              <p>userName</p>
            </div>
            <ul className="text-sm">
              <li>
                <span className="inline-block w-24 font-bold">소속</span>
                <span>프로그래머스</span>
              </li>
              <li>
                <span className="inline-block w-24 font-bold">신뢰지수</span>
                <span>100 점</span>
              </li>
              <li>
                <span className="inline-block w-24 font-bold">라이브 피드백</span>
                <span>13 회</span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="font-bold">기술 스택</h3>
          <div className="flex justify-between">
            <Button size="sm" variant="outline">
              React
            </Button>
            <SearchSelect
              state={stack}
              setState={setstack}
              fillterList={techStackList}
              placeholder="기술 스택을 입력해보세요."
            />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <h3 className="font-bold">멘토 소개</h3>
            <Label>제목</Label>
            <Input name="title" />
            <Label>본문</Label>
            <Textarea className="h-36 resize-none" name="content" />
          </div>
          <Button className="text-white" type="submit">
            등록하기
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddMentorModal;
