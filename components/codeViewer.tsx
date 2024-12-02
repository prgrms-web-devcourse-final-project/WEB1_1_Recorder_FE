import { Editor } from "@monaco-editor/react";
type Props = {
  code: string;
  language: string;
};

const CodeViewer = ({ code, language }: Props) => {
  return (
    <Editor className="h-96 w-full" theme="vs-dark" language={language} value={code} options={{ readOnly: true }} />
  );
};

export default CodeViewer;
