"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpFormSchema } from "@/lib/formSchema";
import { z } from "zod";
import signUp from "@/services/signUp";
import { Input } from "@/components/ui/input";
import uploadImage from "@/services/uploadImage";
import StacksModal from "@/components/stacksModal";
import { Label } from "@/components/ui/label";
import getMyInfo from "@/services/getMyInfo";
import { useQuery } from "@tanstack/react-query";
const SignUp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const accessToken = searchParams.get("access_token");
  const refreshToken = searchParams.get("refresh_token");
  const isFirstLogin = searchParams.get("is_first");

  const { data } = useQuery({ queryKey: ["getMyInfo"], queryFn: getMyInfo });

  let defaultValues = {
    nickname: "",
    profileImage: "",
    introduction: "안녕하세요 신입 개발자입니다. 잘부탁드립니다.",
    stacks: []
  };
  if (!accessToken) {
    defaultValues = {
      nickname: data?.result.nickname || "",
      profileImage: data?.result.profileImage || "",
      introduction: data?.result.introduction || "안녕하세요 신입 개발자입니다. 잘부탁드립니다.",
      stacks: []
    };
  }

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleStack = (stack: string) => {
    const current = form.watch("stacks");
    form.setValue("stacks", current.includes(stack) ? current.filter((s) => s !== stack) : [...current, stack]);
  };
  useEffect(() => {
    if (accessToken) {
      Cookies.set("accessToken", accessToken);
    }
    if (refreshToken) {
      Cookies.set("refreshToken", refreshToken);
    }
    if (accessToken && isFirstLogin === "false") {
      router.push("/");
    }
  }, [accessToken, router]);

  if (isFirstLogin === "false") {
    return null;
  }

  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: defaultValues
  });

  const onSubmit = async (values: z.infer<typeof signUpFormSchema>) => {
    try {
      console.log(values);
      const data2 = await signUp({ formData: values });
      router.push("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleClick = () => {
    form.handleSubmit(onSubmit)();
  };
  return (
    <div className="min-h m-auto flex w-full max-w flex-col items-center justify-center gap-8">
      <Form {...form}>
        <form className="w-1/3 space-y-8">
          <FormField
            control={form.control}
            name={`nickname`}
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>닉네임 </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="닉네임을 입력해주세요" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`profileImage`}
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>프로필 이미지 </FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    placeholder="프로필 이미지를 업로드 해주세요"
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const data = await uploadImage(file);
                        field.onChange(data.result.imageUrl);
                      }
                    }}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`introduction`}
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>소개글 </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="소개글을 작성해주세요" />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex flex-col flex-wrap gap-2">
            <Label>개발 스택</Label>
            <div className="flex gap-2">
              {form.watch("stacks").map((stack, index) => (
                <FormField
                  control={form.control}
                  key={index}
                  name={`stacks.${index}`}
                  render={() => (
                    <FormItem>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          onClick={() => {
                            const updateStacks = form.watch("stacks").filter((item, i) => i !== index);
                            form.setValue("stacks", updateStacks);
                          }}
                        >
                          {stack}
                        </Button>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <Button type="button" variant="outline" size="default" onClick={openModal}>
                태그 추가
              </Button>
            </div>
          </div>
        </form>
      </Form>
      <div className="flex gap-4"></div>
      <Button onClick={handleClick} size="lg">
        회원정보 저장하기
      </Button>

      {isModalOpen && (
        <StacksModal
          closeModal={closeModal}
          toggleStack={toggleStack}
          isModalOpen={isModalOpen}
          current={form.watch("stacks")}
        />
      )}
    </div>
  );
};

export default SignUp;
