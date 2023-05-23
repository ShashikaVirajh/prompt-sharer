'use client';

import { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Profile from '@components/profile';
import { Post } from '@types';

const UserProfile: FC<Props> = ({ params }): JSX.Element | null => {
  const searchParams = useSearchParams();
  const userName = searchParams.get('name');

  const [userPosts, setUserPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async (): Promise<void> => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();

      setUserPosts(data);
    };

    if (params?.id) fetchPosts();
  }, [params.id]);

  if (!userName) return null;

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
      data={userPosts}
    />
  );
};

type Props = {
  params: { id?: string };
};

export default UserProfile;
