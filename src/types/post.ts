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
  }
  