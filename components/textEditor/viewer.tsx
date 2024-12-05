"use client";
// InitializedMDXEditor.tsx
import type { ForwardedRef } from "react";
import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  type MDXEditorMethods,
  type MDXEditorProps,
  linkDialogPlugin,
  imagePlugin,
  codeMirrorPlugin,
  codeBlockPlugin,
  directivesPlugin,
  AdmonitionDirectiveDescriptor
} from "@mdxeditor/editor";

type Props = { editorRef: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps;

const Viewer = ({ editorRef, ...props }: Props) => {
  return (
    <MDXEditor
      plugins={[
        imagePlugin({
          imageAutocompleteSuggestions: ["https://via.placeholder.com/150", "https://via.placeholder.com/150"],
          imageUploadHandler: async () => Promise.resolve("https://picsum.photos/200/300")
        }),
        linkDialogPlugin(),
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),
        codeBlockPlugin({ defaultCodeBlockLanguage: "JavaScript" }),
        codeMirrorPlugin({
          codeBlockLanguages: {
            js: "JavaScript",
            css: "CSS",
            txt: "Plain Text",
            tsx: "TypeScript",
            "": "Unspecified"
          }
        }),
        directivesPlugin({
          directiveDescriptors: [AdmonitionDirectiveDescriptor]
        })
      ]}
      {...props}
      ref={editorRef}
    />
  );
};
export default Viewer;
