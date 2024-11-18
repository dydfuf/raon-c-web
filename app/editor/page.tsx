import TailwindAdvancedEditor from "@/components/tailwind/advanced-editor";
import React from "react";

export default function page() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-4 py-4 sm:px-5">
      <TailwindAdvancedEditor />
    </div>
  );
}
