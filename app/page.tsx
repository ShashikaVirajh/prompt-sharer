import Feed from '@components/feed';
import { FC } from 'react';

const Home: FC = (): JSX.Element => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powerd Prompts</span>
      </h1>

      <p className="desc text-center">
        Prompt Sharer is an open-source AI propmting tool for modern world to disover, create and
        share creative prompts
      </p>

      <Feed />
    </section>
  );
};

export default Home;
