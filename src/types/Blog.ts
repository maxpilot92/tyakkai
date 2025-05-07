import { Category } from "./Category";

export interface Blog {
  id: string;
  userId: string | null;
  createdAt: string;
  updatedAt: string;
  title: string;
  content: string;
  published: boolean;
  categoryId: string;
  tags: string[];
  url: string;
  mediaId: string | null;
  Category: Category;
}
