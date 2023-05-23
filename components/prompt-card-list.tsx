'use client';

import { FC } from 'react';
import PromptCard from './prompt-card';
import { Post } from '@types';

const PromptCardList: FC<Props> = ({ data, handleTagClick }): JSX.Element => (
  <div className="mt-16 prompt_layout">
    {data.map((post: Post) => (
      <PromptCard key={post._id} post={post} handleTagClick={handleTagClick} />
    ))}
  </div>
);

type Props = {
  data: Post[];
  handleTagClick: (tag: string) => void;
};

export default PromptCardList;
