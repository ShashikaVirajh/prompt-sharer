export type SessionUser = {
  id?: string;
  name?: string;
  image?: string;
  email?: string;
};

export type Post = {
  _id?: string;
  creator?: PostUser;
  prompt: string;
  tag: string;
};

export type PostUser = {
  _id?: string;
  username?: string;
  image?: string;
  email?: string;
};
