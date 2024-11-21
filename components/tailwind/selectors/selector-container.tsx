import { EditorBubble, useEditor } from "novel";
import { type ReactNode } from "react";

interface SelectorContainerProps {
  children: ReactNode;
}
const SelectorContainer = ({ children }: SelectorContainerProps) => {
  const { editor } = useEditor();

  return (
    <EditorBubble
      tippyOptions={{
        placement: "bottom-start",
        onHidden: () => {
          editor?.chain().unsetHighlight().run();
        },
      }}
      className="flex w-fit max-w-[90vw] overflow-hidden rounded-md border border-muted bg-background shadow-xl"
    >
      {children}
    </EditorBubble>
  );
};

export default SelectorContainer;
