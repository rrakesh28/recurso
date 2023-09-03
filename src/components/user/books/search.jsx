import { BsSearch } from "react-icons/bs";
const Search = () => {
  return (
    <div className="px-3 bg-gradient-to-b from-green-300 via-green-200 to-green-50 px-[2rem] py-[2rem] h-[16rem] lg:pl-[14rem] lg:flex lg:flex-row">
      <p className="font-bold text-xl lg:text-3xl">Books</p>
      <div className="flex items-center mt-[2rem] lg:mt-[1rem] lg:ml-[5rem] lg:items-start">
        <input
          type="text"
          placeholder="Search Books"
          className="h-[2rem] w-[15rem] lg:w-[20rem] rounded-tl-[0.2rem] rounded-bl-[0.2rem] px-[0.6rem] focus:outline-none placeholder:text-sm"
        />
        <div className="bg-green-400 h-[2rem] flex items-center px-[1rem] rounded-tr-[0.2rem] rounded-br-[0.2rem]">
          <BsSearch className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Search;
