"use client";
import { Editor } from "@monaco-editor/react";
import { Dispatch, SetStateAction } from "react";
type Props = {
  code: string;
  language: string;
  setCode: Dispatch<SetStateAction<string>>;
};

const CodeEditor = ({ code, setCode, language }: Props) => {
  const changeEventHandler = (value: string | undefined) => {
    setCode(value || "");
  };
  return (
    <Editor className="h-full w-full" theme="vs-dark" language={language} value={code} onChange={changeEventHandler} />
  );
};

export default CodeEditor;
