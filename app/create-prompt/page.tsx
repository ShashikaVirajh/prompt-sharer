"use client";

import { FC, FormEvent, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/form";
import { Post, User } from "@types";

const CreatePrompt: FC = (): JSX.Element => {
  const router = useRouter();
  const { data } = useSession();
  const user = data?.user as User;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState<Post>({ prompt: "", tag: "" });

  const createPrompt = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: user?.id,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={isSubmitting}
      handleSubmit={(event: FormEvent<HTMLFormElement>) => createPrompt(event)}
    />
  );
};

export default CreatePrompt;
