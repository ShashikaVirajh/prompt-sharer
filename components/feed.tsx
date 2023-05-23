'use client';

import { useState, useEffect, FC, FormEvent } from 'react';
import { Post } from '@types';
import PromptCardList from './prompt-card-list';

const Feed: FC = (): JSX.Element => {
  const [allPosts, setAllPosts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout>();
  const [searchedResults, setSearchedResults] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async (): Promise<void> => {
      const response = await fetch('/api/prompt');
      const data = await response.json();

      setAllPosts(data);
    };

    fetchPosts();
  }, []);

  const filterPrompts = (searchtext: string): Post[] => {
    const regex = new RegExp(searchtext, 'i');

    return allPosts.filter(
      (post: Post) =>
        regex.test(post.creator?.username ?? '') || regex.test(post.tag) || regex.test(post.prompt),
    );
  };

  const handleSearchChange = (e: FormEvent<HTMLInputElement>) => {
    clearTimeout(searchTimeout);
    setSearchText(e.currentTarget.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.currentTarget.value);
        setSearchedResults(searchResult);
      }, 500),
    );
  };

  const handleTagClick = (tagName: string): void => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      {searchText ? (
        <PromptCardList data={searchedResults} handleTagClick={handleTagClick} />
      ) : (
        <PromptCardList data={allPosts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
