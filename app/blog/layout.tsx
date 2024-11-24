export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="size-full min-h-screen mx-auto px-5 max-w-screen-md border-x">
      <div className="pt-32 pb-4">
        <div className="size-full mx-auto px-5 max-w-screen-md">
          <h1 className="text-4xl font-bold">Blog</h1>
        </div>
      </div>
      <div className="flex-1 py-4">
        <div className="size-full mx-auto px-5 max-w-screen-md">{children}</div>
      </div>
    </div>
  );
}
