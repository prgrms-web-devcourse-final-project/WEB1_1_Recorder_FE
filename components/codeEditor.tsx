"use client";
import { Editor } from "@monaco-editor/react";

const CodeEditor = () => {
  return <Editor className="h-full w-full" theme="vs-dark" language="javascript" />;
};

export default CodeEditor;
