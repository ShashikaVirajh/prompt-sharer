import { FC } from 'react';
import PromptCard from './prompt-card';
import { Post } from '@types';

const Profile: FC<Props> = ({ name, desc, data, handleEdit, handleDelete }) => (
  <section className="w-full">
    <h1 className="head_text text-left">
      <span className="blue_gradient">{name} Profile</span>
    </h1>
    <p className="desc text-left">{desc}</p>

    <div className="mt-10 prompt_layout">
      {data.map((post: any) => (
        <PromptCard
          key={post._id}
          post={post}
          handleEdit={() => handleEdit?.(post)}
          handleDelete={() => handleDelete?.(post)}
        />
      ))}
    </div>
  </section>
);

type Props = {
  name: string;
  desc: string;
  data: Post[];
  handleEdit?: (post: Post) => void;
  handleDelete?: (post: Post) => void;
};

export default Profile;
