import { TReviewDetail } from "@/types/reviewTypes";

export const data: TReviewDetail = {
  message: "Success",
  result: {
    id: 1,
    writer: "닉네임1234",
    title: "게시글 제목이 표시되는 공간입니다.",
    createdAt: "2024-12-01T04:44:06.796561",
    answerCount: 1,
    readCount: 2,
    githubLink: "링크 비공개",
    stacks: ["SPRING"],
    content:
      "test\\_content\n\n\n\n\n\n```js\ntype Props = {};\n\nconst Answer = ({}: Props) => {\n  return 1234578\n};\n\nexport default Answer;\n\n```\n\n* 테스트콘텐츠1\n* 테스트콘텐츠2\n* ㅁㄴㅇㄹ",
    codes: [
      {
        name: "main.tsx",
        content:
          "type Props = {};\r\n\r\nconst Answer = ({}: Props) => {\r\n  return 1234578\r\n};\r\n\r\nexport default Answer;\r\n"
      },
      {
        name: "sub.tsx",
        content: "console.log('Hello, World!')"
      }
    ],
    answers: [
      {
        id: 1,
        title: "테스트 답변",
        content: "테스트 답변 작성입니다",
        writer: "닉네임",
        createdAt: "2024-12-01T05:12:36.979824",
        isAccept: false,
        goodCount: 0,
        badCount: 0,
        codes: {
          name: "Example Code 1",
          content:
            'public class Example { public static void main(String[] args) { System.out.println("Hello, World!"); } }'
        }
      },
      {
        id: 2,
        title: "테스트 답변",
        writer: "닉네임",
        content: "테스트 답변 작성입니다",
        createdAt: "2024-12-01T05:12:36.979824",
        isAccept: false,
        goodCount: 0,
        badCount: 0,
        codes: {
          name: "Example Code 1",
          content:
            'public class Example { public static void main(String[] args) { System.out.println("Hello, World!"); } }'
        }
      },
      {
        id: 3,
        title: "테스트 답변",
        writer: "닉네임",
        content: "테스트 답변 작성입니다",
        createdAt: "2024-12-01T05:12:36.979824",
        isAccept: false,
        goodCount: 0,
        badCount: 0,
        codes: {
          name: "Example Code 1",
          content:
            'public class Example { public static void main(String[] args) { System.out.println("Hello, World!"); } }'
        }
      },
      {
        id: 4,
        title: "테스트 답변",
        writer: "닉네임",
        content: "테스트 답변 작성입니다",
        createdAt: "2024-12-01T05:12:36.979824",
        isAccept: false,
        goodCount: 0,
        badCount: 0,
        codes: {
          name: "Example Code 1",
          content:
            'public class Example { public static void main(String[] args) { System.out.println("Hello, World!"); } }'
        }
      }
    ]
  }
};
