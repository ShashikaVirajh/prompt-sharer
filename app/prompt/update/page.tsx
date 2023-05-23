'use client';

import { FC, FormEvent, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Form from '@components/form';
import { Post } from '@types';

const UpdatePrompt: FC = (): JSX.Element => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get('id');

  const [post, setPost] = useState<Post>({ prompt: '', tag: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getPromptDetails = async (): Promise<void> => {
      const response = await fetch(`/api/prompt/${promptId}`);
      const data: Post = await response.json();

      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    };

    if (promptId) getPromptDetails();
  }, [promptId]);

  const updatePrompt = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setIsSubmitting(true);

    if (!promptId) return alert('Prompt not found');

    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={isSubmitting}
      handleSubmit={updatePrompt}
    />
  );
};

export default UpdatePrompt;
