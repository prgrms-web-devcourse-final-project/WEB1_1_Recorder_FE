"use client";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import CodeEditor from "@/components/codeEditor";
import TextEditor from "@/components/textEditor/textEditor";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useRef } from "react";
const formSchema = z.object({
  codes: z.string(),
  content: z.string().min(2, {
    message: "내용을 입력해야 합니다."
  })
});

type formSchemaType = z.infer<typeof formSchema>;

const AnswerForm = () => {
  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      codes: "console.log('Hello, World!')",
      content: "test_content"
    }
  });

  const onSubmit = (values: formSchemaType) => {
    console.log(values);
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
                name={`codes`}
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
