"use client";

import { api } from "~/trpc/react";

export function CreatePost() {
  const createPost = api.post.create.useMutation();

  return (
    <button
      onClick={() => createPost.mutate()}
      className="border border-red-500 p-2"
    >
      click
    </button>
  );
}
