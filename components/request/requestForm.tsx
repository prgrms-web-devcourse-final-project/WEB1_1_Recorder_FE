"use client";
import { Input } from "@/components/ui/input";
import { FaCheck } from "react-icons/fa";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import CodeEditor from "@/components/codeEditor";
import { useEffect, useState } from "react";
import TextEditor from "@/components/textEditor/textEditor";
import { reviewFormSchema } from "@/lib/formSchema";
import { ReviewFormSchema } from "@/types/reviewTypes";
import createReview from "@/services/createReview";
import { Label } from "@radix-ui/react-label";
import { useRouter } from "next/navigation";

const requestForm = ({}) => {
  const router = useRouter();
  const [selectedCodeIndex, setSelectedCodeIndex] = useState(0);
  const form = useForm<ReviewFormSchema>({
    resolver: zodResolver(reviewFormSchema),
    defaultValues: {
      type: "REFACTOR",
      title: "test_title",
      stacks: ["React", "Typescript"],
      githubLink: "https://github.com/",
      githubLinkReveal: false,
      codes: [
        { name: "main.tsx", content: "console.log('Hello, World!')" },
        { name: "sub.tsx", content: "console.log('Hello, World!')" }
      ],
      content: "test_content",
      isAnonymous: false
    }
  });
  useEffect(() => {
    const currentContent = form.getValues(`codes.${selectedCodeIndex}.content`);
    form.setValue(`codes.${selectedCodeIndex}.content`, currentContent);
  }, [selectedCodeIndex, form]);

  const codes = useFieldArray({
    name: "codes",
    control: form.control
  });
  const onSubmit = async (values: ReviewFormSchema) => {
    try {
      const data = await createReview({ requestParams: values });
      const path = `/detail/review/${data.result.id}`;
      router.push(path);
    } catch (error) {
      console.error("Error creating review:", error);
    }
  };

  return (
    <div className="m-auto p-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>질문유형</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid w-1/2 grid-cols-2 gap-4"
                  >
                    <FormItem>
                      <FormControl>
                        <RadioGroupItem value="REFACTOR" className="sr-only" />
                      </FormControl>
                      <FormLabel
                        className={cn(
                          "flex justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent",
                          field.value === "REFACTOR" && "border-primary bg-accent text-primary"
                        )}
                      >
                        REFACTOR
                        <FaCheck className={cn(field.value !== "REFACTOR" && "text-transparent")} />
                      </FormLabel>
                    </FormItem>
                    <FormItem>
                      <FormControl>
                        <RadioGroupItem value="DEBUG" className="sr-only" />
                      </FormControl>
                      <FormLabel
                        className={cn(
                          "flex justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent",
                          field.value === "DEBUG" && "border-primary bg-accent text-primary"
                        )}
                      >
                        Debugging
                        <FaCheck className={cn(field.value !== "DEBUG" && "text-transparent")} />
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>제목</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
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
                  render={({ field }) => (
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
              <Button
                type="button"
                variant="outline"
                size="default"
                disabled={form.watch("stacks").length >= 3}
                onClick={() => form.setValue("stacks", [...form.watch("stacks"), ""])}
              >
                태그 추가
              </Button>
              {/* 태그 선택 모달버튼으로 대체 예정 */}
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FormField
              control={form.control}
              name="githubLink"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormLabel>GitHub</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="GitHub 레포지토리 URL을 입력하세요" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="githubLinkReveal"
              render={({ field }) => (
                <FormItem className="flex items-start space-x-3 pt-6">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} className="sr-only" />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel
                      className={cn(
                        "flex h-9 justify-between gap-4 rounded-md border-2 border-muted bg-popover px-4 py-2 hover:bg-accent",
                        field.value && "border-primary font-semibold"
                      )}
                    >
                      저장소 링크 공개
                      <FaCheck className={cn("text-transparent", field.value && "text-primary")} />
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-wrap items-end gap-2">
            {codes.fields.map((field, index) => (
              <FormField
                control={form.control}
                key={field.id}
                name={`codes.${index}.name`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(index !== 0 && "sr-only")}>메인 코드</FormLabel>
                    <FormLabel className={cn(index !== 1 && "sr-only")}>보조 코드</FormLabel>
                    <FormControl>
                      <Input
                        className={cn(index === selectedCodeIndex && "border-primary")}
                        {...field}
                        onClick={() => {
                          setSelectedCodeIndex(index);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button
              type="button"
              variant="outline"
              size="default"
              className="mt-2"
              disabled={codes.fields.length >= 5}
              onClick={() => codes.append({ name: "", content: "" })}
            >
              파일 추가
            </Button>
          </div>
          <FormField
            control={form.control}
            name={`codes.${selectedCodeIndex}.content`}
            render={({ field }) => (
              <FormItem className="flex h-96 flex-col space-y-0">
                <FormLabel className="border-b border-[#858585] bg-[#1e1e1e] p-2 text-[#dcdcdc]">
                  {codes.fields[selectedCodeIndex].name}
                </FormLabel>
                <FormControl>
                  <CodeEditor code={field.value} setCode={field.onChange} language="typescript" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`content`}
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>본문</FormLabel>
                <FormControl>
                  <TextEditor markdown={field.value} onChange={field.onChange} className="overflow-y-scroll" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`isAnonymous`}
            render={({ field }) => (
              <FormItem className="flex items-center gap-2 space-y-0">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="text-sm">작성자의 닉네임을 익명으로 처리합니다.</FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex w-full flex-row-reverse items-end gap-4">
            <Button type="submit" size="lg">
              리뷰 요청
            </Button>
            <Button variant="outline" size="lg">
              임시 저장
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default requestForm;
