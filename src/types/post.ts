import { ReactNode } from "react";
export type Post = {
  id: string;
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  slug: string;
  title: string;
  content: string;
  date: string;
  author: {
    node: {
      name: string;
      slug: string;
    };
  };
  categories: {
    nodes: {
      name: string;
    }[];
  };
};

export interface CardBlogProps {
  blogContext?: string;
  postImage?: string;
  postImageAlt?: string;
  postLink?: string;
  postTitle?: string | ReactNode;
  postDescription?: { __html: string };
  postDate?: string;
  postMonthDate?: string;
  postAuthor?: string;
  postAuthorLink?: string;
  postCategory?: string;
  postCategoryLink?: string;
  customClasses?: string;
  isSlider?: boolean;
}
