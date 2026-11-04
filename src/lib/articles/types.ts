export interface BlogPostFAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  category: { title: string; slug: { current: string } };
  publishedAt: string;
  updatedAt?: string;
  readTime: number;
  author: { name: string; role: string };
  isFeatured?: boolean;
  metaKeywords?: string[];
  keyTakeaways?: string[];
  faq?: BlogPostFAQ[];
  content: string;
}
