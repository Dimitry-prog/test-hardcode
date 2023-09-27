export type Book = {
  id: number;
  name: string;
  description: string;
  authorId: string;
  reviewIds: string[];
}

export type User = {
  id: string;
  name: string;
}

export type Review = {
  id: string;
  userId: string;
  text: string;
}

export type ReviewInformation = {
  id: string;
  user: User;
  text: string;
}

export type BookInformation = {
  id: number;
  name: string;
  description: string;
  author: User;
  reviews: ReviewInformation[];
}
