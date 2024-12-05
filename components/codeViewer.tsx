"use client";
import React, { useRef, useState } from "react";
import { Editor, Monaco } from "@monaco-editor/react";

type Props = {
  code: string;
  language: string;
};

const CodeViewer = ({ code, language }: Props) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [editorHeight, setEditorHeight] = useState(100);

  const handleEditorDidMount = (editor: any, monaco: Monaco) => {
    const lineHeight = editor.getOption(monaco.editor.EditorOption.lineHeight);
    const lineCount = editor.getModel()?.getLineCount() || 1;
    const height = lineHeight * lineCount + 40;
    setEditorHeight(height);

    editor.onDidChangeModelContent(() => {
      const lineCount = editor.getModel()?.getLineCount() || 1;
      const height = lineHeight * lineCount + 40;
      setEditorHeight(height);
    });
  };

  return (
    <div ref={editorRef}>
      <Editor
        height={editorHeight}
        theme="vs-dark"
        language={language}
        value={code}
        options={{
          readOnly: true,
          scrollbar: { vertical: "hidden", horizontal: "hidden" },
          scrollBeyondLastLine: false,
          padding: { top: 20 }
        }}
        onMount={handleEditorDidMount}
      />
    </div>
  );
};

export default CodeViewer;
