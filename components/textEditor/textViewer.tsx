"use client";
// ForwardRefEditor.tsx
import dynamic from "next/dynamic";
import { forwardRef } from "react";
import { type MDXEditorMethods, type MDXEditorProps } from "@mdxeditor/editor";

const Viewer = dynamic(() => import("./viewer"), {
  ssr: false
});
const TextViewer = forwardRef<MDXEditorMethods, MDXEditorProps>((props, ref) => (
  <Viewer contentEditableClassName="viewer" readOnly {...props} editorRef={ref} />
));

TextViewer.displayName = "TextViewer";

export default TextViewer;
