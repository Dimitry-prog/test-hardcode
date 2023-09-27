import './App.css'
import Card from "./components/Card.tsx";
import useBookInfo from "./hooks/useBookInfo.ts";

const App = () => {
  const { books,isLoading, error} = useBookInfo();

  return (
    <div>
      <h1>Мои книги:</h1>
      {isLoading && <div>Загрузка...</div>}
      {error && <div>{error}</div>}
      {!isLoading && !error && (
        <div className="cards">
          {books.map((book) => (
            <Card key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
