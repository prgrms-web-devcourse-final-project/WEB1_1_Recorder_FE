"use client";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import CodeEditor from "@/components/codeEditor";
import TextEditor from "@/components/textEditor/textEditor";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AnswerFormSchema } from "@/types/reviewTypes";
import { answerFormSchema } from "@/lib/formSchema";
import createAnswer from "@/services/createAnswer";
import { useRouter } from "next/navigation";

type Props = {
  postId: number;
};
const AnswerForm = ({ postId }: Props) => {
  const router = useRouter();
  const form = useForm<AnswerFormSchema>({
    resolver: zodResolver(answerFormSchema),
    defaultValues: {
      code: "console.log('Hello, World!')",
      content: "test_content"
    }
  });

  const onSubmit = async (values: AnswerFormSchema) => {
    try {
      const data = await createAnswer({ requestParams: { ...values, questionId: postId } });
      console.log("Answer created:", values);
      router.refresh();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleClick = () => {
    form.handleSubmit(onSubmit)();
  };

  return (
    <div className="p-5">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">답변하기</CardTitle>
        </CardHeader>
        <CardContent className="p-5">
          <Form {...form}>
            <form className="space-y-8">
              <FormField
                control={form.control}
                name={`code`}
                render={({ field }) => (
                  <FormItem className="flex h-96 flex-col space-y-0">
                    <FormLabel className="border-b border-[#858585] bg-[#1e1e1e] p-2 text-[#dcdcdc]">코드</FormLabel>
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
                    <FormControl>
                      <TextEditor markdown={field.value} onChange={field.onChange} className="overflow-y-scroll" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={handleClick} size="lg">
            답변하기
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AnswerForm;
