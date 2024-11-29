"use client";
// ForwardRefEditor.tsx
import dynamic from "next/dynamic";
import { forwardRef } from "react";
import { type MDXEditorMethods, type MDXEditorProps } from "@mdxeditor/editor";

const Editor = dynamic(() => import("./editor"), {
  ssr: false
});
const TextEditor = forwardRef<MDXEditorMethods, MDXEditorProps>((props, ref) => (
  <Editor contentEditableClassName="prose" {...props} editorRef={ref} />
));

TextEditor.displayName = "TextEditor";

export default TextEditor;
