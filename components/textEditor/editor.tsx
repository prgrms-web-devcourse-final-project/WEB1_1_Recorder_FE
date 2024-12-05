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
  toolbarPlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
  CodeToggle,
  ListsToggle,
  CreateLink,
  linkDialogPlugin,
  imagePlugin,
  InsertImage,
  InsertThematicBreak,
  codeMirrorPlugin,
  codeBlockPlugin,
  InsertCodeBlock,
  InsertAdmonition,
  directivesPlugin,
  AdmonitionDirectiveDescriptor
} from "@mdxeditor/editor";

type Props = { editorRef: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps;

const Editor = ({ editorRef, ...props }: Props) => {
  return (
    <MDXEditor
      plugins={[
        toolbarPlugin({
          toolbarContents: () => (
            <>
              <UndoRedo />
              <BoldItalicUnderlineToggles />
              <CodeToggle />
              <ListsToggle />
              <CreateLink />
              <InsertImage />
              <InsertThematicBreak />
              <InsertCodeBlock />
              <InsertAdmonition />
            </>
          )
        }),
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
        codeBlockPlugin({ defaultCodeBlockLanguage: "js" }),
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
export default Editor;
