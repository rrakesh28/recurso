import Header from "../../components/user/Header";
import Search from "../../components/user/books/search";
import Popular from "../../components/user/books/popular";
import TextBooks from "../../components/user/books/Textbooks";
const Books = () => {
  return (
    <div>
      <Header />
      <Search />
      <Popular />
      <TextBooks />
    </div>
  );
};

export default Books;
