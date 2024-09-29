import { BlogCategories } from "@/components-screen/blog-detail-page";
import { Author } from "./author";

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  coverImage: string;
  keywords: string[];
  author: Author;
  excerpt: string;
  content: string;
  category: BlogCategories;
};
