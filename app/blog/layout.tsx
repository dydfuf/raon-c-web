import AddPostButton from "./_components/AddPostButton";

export default function BlogLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="size-full min-h-screen mx-auto px-5 max-w-screen-md border-x">
      <div className="pt-32 pb-4">
        <div className="size-full mx-auto px-5 max-w-screen-md">
          <h1 className="text-4xl font-bold">Blog</h1>
          <AddPostButton />
        </div>
      </div>
      <div className="flex-1 py-4">
        <div className="size-full mx-auto px-5 max-w-screen-md">{children}</div>
      </div>
      {modal}
    </div>
  );
}
