import { createClient } from "@/lib/supabase/server";
import Form from "next/form";
import { createPost } from "../actions";
import { redirect } from "next/navigation";

export default async function AddPostButton() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  if (!data.user) {
    return null;
  }

  const handleSubmit = async () => {
    "use server";

    const createdPost = await createPost();
    redirect(`/blog/${createdPost?.id}`);
  };

  return (
    <Form action={handleSubmit}>
      <button type="submit">Add Post</button>
    </Form>
  );
}
