"use client";
import { Input } from "@/components/ui/input";
import { FaCheck } from "react-icons/fa";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import CodeEditor from "@/components/codeEditor";
import { useEffect, useState } from "react";
import TextEditor from "@/components/textEditor/textEditor";

const formSchema = z.object({
  category: z.enum(["refactoring", "debugging"], {
    required_error: "질문 유형을 선택해야 합니다."
  }),
  title: z.string().min(2, {
    message: "제목을 입력해야 합니다."
  }),
  stacks: z
    .array(
      z.object({
        value: z.string()
      })
    )
    .optional(),
  githubLink: z.string().url().optional(),
  githubLinkReveal: z.boolean().optional(),
  codes: z.array(
    z.object({
      name: z.string(),
      content: z.string()
    })
  ),
  content: z.string().min(2, {
    message: "내용을 입력해야 합니다."
  }),
  isAnonymous: z.boolean().optional()
});

type formSchemaType = z.infer<typeof formSchema>;

const RequestReviewForm = ({}) => {
  const [selectedCodeIndex, setSelectedCodeIndex] = useState(0);
  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "refactoring",
      title: "test_title",
      stacks: [{ value: "React" }, { value: "Typescript" }],
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

  const stacks = useFieldArray({
    name: "stacks",
    control: form.control
  });
  const codes = useFieldArray({
    name: "codes",
    control: form.control
  });
  function onSubmit(values: formSchemaType) {
    console.log(values);
  }

  return (
    <div className="m-auto p-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="category"
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
                        <RadioGroupItem value="refactoring" className="sr-only" />
                      </FormControl>
                      <FormLabel
                        className={cn(
                          "flex justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent",
                          field.value === "refactoring" && "border-primary bg-accent text-primary"
                        )}
                      >
                        Refactoring
                        <FaCheck className={cn(field.value !== "refactoring" && "text-transparent")} />
                      </FormLabel>
                    </FormItem>
                    <FormItem>
                      <FormControl>
                        <RadioGroupItem value="debugging" className="sr-only" />
                      </FormControl>
                      <FormLabel
                        className={cn(
                          "flex justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent",
                          field.value === "debugging" && "border-primary bg-accent text-primary"
                        )}
                      >
                        Debugging
                        <FaCheck className={cn(field.value !== "debugging" && "text-transparent")} />
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
          <div className="flex flex-wrap items-end gap-2">
            {stacks.fields.map((field, index) => (
              <FormField
                control={form.control}
                key={field.id}
                name={`stacks.${index}.value`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(index !== 0 && "sr-only")}>개발 스택</FormLabel>
                    <FormControl>
                      <Input {...field} />
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
              disabled={stacks.fields.length >= 3}
              onClick={() => stacks.append({ value: "" })}
            >
              태그 추가
            </Button>
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
                  <TextEditor markdown={field.value} onChange={field.onChange} className="h-96 overflow-y-scroll" />
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

export default RequestReviewForm;
