import { useEffect, useState } from "react";
import { BookInformation } from "../types/types.ts";
import { getBooks, getReviews, getUsers } from "../api/api.ts";
import transformBookInfo from "../lib/transformBookInfo.ts";

const useBookInfo = () => {
  const [books, setBooks] = useState<BookInformation[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [fetchedBooks, fetchedUsers, fetchedReviews] = await Promise.all([
          getBooks(),
          getUsers(),
          getReviews()
        ]);
        const bookInfos = fetchedBooks.map((book) =>
          transformBookInfo(book, fetchedUsers, fetchedReviews)
        );
        setBooks(bookInfos);
      } catch (e) {
        const error = e as string;
        setError(error);
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return {
    books,
    isLoading,
    error
  }
};

export default useBookInfo;