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
  codesName: z.array(z.string()),
  codesContent: z.array(z.string())
});

export const liveFeedbackFormSchema = z.object({
  title: z.string().min(2, {
    message: "제목을 입력해야 합니다."
  }),
  description: z.string().min(2, {
    message: "내용을 입력해야 합니다."
  }),
  githubLinkReveal: z.boolean().optional(),
  githubLink: z.string().url().optional(),
  type: z.enum(["REFACTORING", "DEBUGGING"], {
    required_error: "질문 유형을 선택해야 합니다."
  }),
  skillStacks: z.array(z.string()),
  codesName: z.array(z.string()),
  codesContent: z.array(z.string())
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
  }),
  profileImage: z.string().url().optional(),
  introduction: z.string().optional(),
  stacks: z.array(z.string())
});
