"use client";
import { Editor } from "@monaco-editor/react";
import { Dispatch, SetStateAction } from "react";
type Props = {
  code: string;
  language: string;
  setCode: Dispatch<SetStateAction<string>>;
  readonly?: boolean;
};

const CodeEditor = ({ code, setCode, language, readonly = false }: Props) => {
  const changeEventHandler = (value: string | undefined) => {
    setCode(value || "");
  };
  return (
    <Editor
      className="h-full w-full"
      theme="vs-dark"
      language={language}
      value={code}
      onChange={changeEventHandler}
      options={{ readOnly: readonly }}
    />
  );
};

export default CodeEditor;
