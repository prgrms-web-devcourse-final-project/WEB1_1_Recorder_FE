import { z } from "zod";

export const reviewFormSchema = z.object({
  title: z.string().min(2, {
    message: "제목을 입력해야 합니다."
  }),
  content: z.string().min(2, {
    message: "내용을 입력해야 합니다."
  }),
  githubLinkReveal: z.boolean().optional(),
  githubLink: z.string().url().optional(),
  type: z.enum(["REFACTOR", "DEBUG"], {
    required_error: "질문 유형을 선택해야 합니다."
  }),
  isAnonymous: z.boolean().optional(),
  stacks: z.array(z.string()),
  codes: z.array(
    z.object({
      name: z.string(),
      content: z.string()
    })
  )
});

export const answerFormSchema = z.object({
  code: z.string(),
  content: z.string().min(2, {
    message: "내용을 입력해야 합니다."
  })
});

export const signUpFormSchema = z.object({
  nickname: z.string().min(2, {
    message: "내용을 입력해야 합니다."
  })
});
