"use client";
import { Editor } from "@monaco-editor/react";
import { Dispatch, SetStateAction } from "react";
type Props = {
  code: string;
  language: string;
  codeName?: string;
  ref?: any;
  setCode: Dispatch<SetStateAction<string>>;
};

const CodeEditor = ({ code, setCode, codeName = "Code", language, ref }: Props) => {
  const changeEventHandler = (value: string | undefined) => {
    setCode(value || "");
  };
  return (
    <>
      <div className="h-[2.5rem] border-b border-[#858585] bg-[#1e1e1e] p-2 text-[#dcdcdc]">{codeName}</div>
      <Editor
        className="h-full w-full"
        theme="vs-dark"
        language={language}
        value={code}
        onChange={changeEventHandler}
      />
    </>
  );
};

export default CodeEditor;
