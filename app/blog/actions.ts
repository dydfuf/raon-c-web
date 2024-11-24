"use server";

import { Database } from "@/database.types";
import { createClient } from "@/lib/supabase/server";

export async function getPosts() {
  const supabase = await createClient();

  const { data, error } = await supabase.from("post").select("*");

  if (error) {
    throw error;
  }

  return data;
}

export async function getPost(slug: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("post")
    .select("*")
    .eq("slug", slug);

  if (error) {
    throw error;
  }

  return data;
}

type Post = Database["public"]["Tables"]["post"]["Row"];
export async function updatePost(post: Post) {
  const supabase = await createClient();

  const { data, error } = await supabase.from("post").upsert(post).select();

  if (error) {
    throw error;
  }

  return data;
}
