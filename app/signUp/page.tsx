"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpFormSchema } from "@/lib/formSchema";
import { z } from "zod";
import signUp from "@/services/signUp";
import { Input } from "@/components/ui/input";
const SignUp = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const accessToken = searchParams.get("access_token");
  const refreshToken = searchParams.get("refresh_token");
  const isFirstLogin = searchParams.get("is_first");

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
    defaultValues: {
      nickname: ""
    }
  });

  const onSubmit = async (values: z.infer<typeof signUpFormSchema>) => {
    try {
      const data = await signUp(values.nickname);
      router.push("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleClick = () => {
    form.handleSubmit(onSubmit)();
  };
  return (
    <div className="flex h-[calc(100vh-320px)] w-full flex-col items-center justify-center gap-8">
      <Form {...form}>
        <form className="space-y-8">
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
        </form>
      </Form>
      <Button onClick={handleClick} size="lg">
        가입하기
      </Button>
    </div>
  );
};

export default SignUp;
