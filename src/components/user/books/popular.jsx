import Book from "./Book";
const PopularBooks = () => {
  return (
    <div className="mx-4 mt-[-5rem] bg-white px-4 py-6 rounded-[0.2rem] lg:mx-[10rem]">
      <p className="font-bold text-lg lg:text-xl">Popular Now</p>

      <div className="grid grid-cols-1 gap-2 mx-2">
        <Book courseId="WBXzxXqNux2qnwtGyTTC" />
      </div>
    </div>
  );
};

export default PopularBooks;
