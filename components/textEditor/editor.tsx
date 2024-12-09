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
import uploadImage from "@/services/uploadImage";
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
          imageUploadHandler: async (file) => {
            const data = await uploadImage(file);
            return data.result.imageUrl;
          }
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
