import { Book, BookInformation, Review, User } from "../types/types.ts";

const transformBookInfo = (
  book: Book,
  users: User[],
  reviews: Review[]
): BookInformation => {
  const author = users.find((user) => user.id === book.authorId);
  const bookReviews = reviews.filter((review) => book.reviewIds.includes(review.id));
  const reviewInfos = bookReviews.map((review) => {
    const reviewer = users.find((user) => user.id === review.userId);
    return {
      id: review.id,
      text: review.text,
      user: {
        id: reviewer?.id || "",
        name: reviewer?.name || "Автор неизвестен"
      }
    };
  });
  return {
    id: book.id,
    name: book.name || "Книга без названия",
    author: {
      id: author?.id || "",
      name: author?.name || "Автор неизвестен"
    },
    reviews: reviewInfos,
    description: book.description
  };
};

export default transformBookInfo;