import { Author } from "./author";

export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  category:
    | "fun golf games"
    | "golf technology"
    | "golf tips"
    | "social golfing";
  preview?: boolean;
};
