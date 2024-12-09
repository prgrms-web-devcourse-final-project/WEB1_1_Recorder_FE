"use client";
import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";
import { MonacoBinding } from "y-monaco";
import { useRef } from "react";
import saveLiveFeedbackCode from "@/services/saveLiveFeedbackCode";
import dynamic from "next/dynamic";
import getLiveFeedbackSessions from "@/services/getLiveFeedbackSessions";
import getLiveFeedbackCode from "@/services/getLiveFeedbackCode";

const MonacoEditor = dynamic(() => import("@monaco-editor/react").then((mod) => mod.Editor), { ssr: false });

const Session = () => {
  const editorRef = useRef<any>(null);
  const providerRef = useRef<WebsocketProvider | null>(null);
  const debounceTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const docId = "4";

  const saveToServer = async (content: string) => {
    try {
      const response = await saveLiveFeedbackCode({ docId, content });
    } catch (error) {
      console.error("Failed to save content:", error);
    }
  };

  const handleEditorDidMount = (editor: any) => {
    if (typeof window !== "undefined") {
      const ydoc = new Y.Doc();

      const ytext = ydoc.getText("monaco");

      const onTextChange = () => {
        if (debounceTimeout.current) {
          clearTimeout(debounceTimeout.current);
        }
        debounceTimeout.current = setTimeout(() => {
          saveToServer(ytext.toString());
        }, 2000);
      };

      const initializeEditor = async () => {
        try {
          const response = await getLiveFeedbackSessions({ docId });
          const sessions = response.result;

          if (sessions === 0) {
            const initialFeedbackCode = await getLiveFeedbackCode({ docId });
            if (initialFeedbackCode.result.content) {
              ytext.insert(0, initialFeedbackCode.result.content);
            }
          }
        } catch (error) {
          console.error("Failed to check or fetch initial data:", error);
        } finally {
          initializeWebSocket();
        }
      };

      const initializeWebSocket = () => {
        const wsProvider = new WebsocketProvider(`${process.env.NEXT_PUBLIC_WS_URL}/ws/feedback`, docId, ydoc);
        providerRef.current = wsProvider;

        const binding = new MonacoBinding(ytext, editor.getModel()!, new Set([editor]), wsProvider.awareness);

        ytext.observe(onTextChange); // Y.Text 변경 감지

        return () => {
          ytext.unobserve(onTextChange);
          binding.destroy();
          wsProvider.destroy();
          ydoc.destroy();
        };
      };

      initializeEditor();
    }
  };

  return (
    <div ref={editorRef}>
      <MonacoEditor className="h-96 w-full" theme="vs-dark" onMount={handleEditorDidMount} />
    </div>
  );
};

export default Session;
