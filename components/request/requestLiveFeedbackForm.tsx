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
import { liveFeedbackFormSchema } from "@/lib/formSchema";
import { LiveFeedbackFormSchema } from "@/types/reviewTypes";
import createReview from "@/services/createReview";
import { Label } from "@radix-ui/react-label";
import { useRouter } from "next/navigation";
import StacksModal from "@/components/stacksModal";
import createLiveFeedback from "@/services/createLiveFeedback";

type Props = {
  teacherId: number;
};
const RequestLiveFeedbackForm = ({ teacherId }: Props) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCodeIndex, setSelectedCodeIndex] = useState(0);
  const form = useForm<LiveFeedbackFormSchema>({
    resolver: zodResolver(liveFeedbackFormSchema),
    defaultValues: {
      type: "REFACTORING",
      title: "test_title",
      skillStacks: ["React", "Typescript"],
      githubLink: "https://github.com/",
      githubLinkReveal: false,
      feedbackCodes: [
        { name: "main.tsx", content: "console.log('Hello, World!')" },
        { name: "sub.tsx", content: "console.log('Hello, World!')" }
      ],
      description: "test_content"
    }
  });

  useEffect(() => {
    const currentContent = form.getValues(`feedbackCodes.${selectedCodeIndex}.content`);
    form.setValue(`feedbackCodes.${selectedCodeIndex}.content`, currentContent);
  }, [selectedCodeIndex]);

  const codes = useFieldArray({
    name: "feedbackCodes",
    control: form.control
  });
  const onSubmit = async (values: LiveFeedbackFormSchema) => {
    try {
      const data = await createLiveFeedback({ requestParams: { ...values, teacherId } });
      const path = `/detail/livefeedback/${data.result}`;
      router.push(path);
    } catch (error) {
      console.error("Error creating review:", error);
    }
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleStack = (stack: string) => {
    const current = form.watch("skillStacks");
    form.setValue("skillStacks", current.includes(stack) ? current.filter((s) => s !== stack) : [...current, stack]);
  };
  const formHandleSubmit = form.handleSubmit(onSubmit);

  return (
    <div className="m-auto p-5">
      <StacksModal
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        current={form.watch("skillStacks")}
        toggleStack={toggleStack}
      />
      <Form {...form}>
        <form onSubmit={formHandleSubmit} className="space-y-8">
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
                        <RadioGroupItem value="REFACTORING" className="sr-only" />
                      </FormControl>
                      <FormLabel
                        className={cn(
                          "flex justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent",
                          field.value === "REFACTORING" && "border-primary bg-accent text-primary"
                        )}
                      >
                        Refactoring
                        <FaCheck className={cn(field.value !== "REFACTORING" && "text-transparent")} />
                      </FormLabel>
                    </FormItem>
                    <FormItem>
                      <FormControl>
                        <RadioGroupItem value="DEBUGGING" className="sr-only" />
                      </FormControl>
                      <FormLabel
                        className={cn(
                          "flex justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent",
                          field.value === "DEBUGGING" && "border-primary bg-accent text-primary"
                        )}
                      >
                        Debugging
                        <FaCheck className={cn(field.value !== "DEBUGGING" && "text-transparent")} />
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
              {form.watch("skillStacks").map((stack, index) => (
                <FormField
                  control={form.control}
                  key={index}
                  name={`skillStacks.${index}`}
                  render={() => (
                    <FormItem>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          onClick={() => {
                            const updateStacks = form.watch("skillStacks").filter((item, i) => i !== index);
                            form.setValue("skillStacks", updateStacks);
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
                name={`feedbackCodes.${index}.name`}
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
            name={`feedbackCodes.${selectedCodeIndex}.content`}
            render={({ field }) => (
              <FormItem className="flex h-96 flex-col space-y-0">
                <FormControl>
                  <CodeEditor
                    codeName={codes.fields[selectedCodeIndex].name}
                    code={codes.fields[selectedCodeIndex].content}
                    setCode={field.onChange}
                    language="typescript"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`description`}
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormControl>
                  <TextEditor markdown={field.value} onChange={field.onChange} className="overflow-y-scroll" />
                </FormControl>
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

export default RequestLiveFeedbackForm;
