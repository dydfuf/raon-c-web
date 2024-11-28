import { getPostByUuid } from "../../actions";

interface PostEditPageProps {
  params: {
    uuid: string;
  };
}

export default async function PostEditPage({ params }: PostEditPageProps) {
  const post = await getPostByUuid(params.uuid);

  console.log({ post });

  return <div>page</div>;
}
