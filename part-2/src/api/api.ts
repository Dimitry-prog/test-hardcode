import { Book, Review, User } from "../types/types.ts";
import { books, reviews, users } from "../lib/mocks.ts";

const getAsync = <T>(value: T[]): Promise<T[]> => {
  return new Promise((res) => {
    setTimeout(() => res(value), Math.random() * 3000);
  });
};

export const getBooks = (): Promise<Book[]> => getAsync(books);
export const getUsers = (): Promise<User[]> => getAsync(users);
export const getReviews = (): Promise<Review[]> => getAsync(reviews);