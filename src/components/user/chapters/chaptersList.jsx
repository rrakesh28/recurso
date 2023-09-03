import { AiFillBook } from "react-icons/ai";
const ChaptersList = () => {
  return (
    <div className="py-10 px-5 bg-gray-100">
      <div className="rounded-lg bg-white hover:shadow-md">
        <div className="flex items-center gap-2 py-3 px-3">
          <div className="bg-blue-200 p-2 rounded-lg">
            <AiFillBook className="text-green-600" />
          </div>
          <p className="font-bold">Chapter 1</p>
        </div>
      </div>

      <div className="rounded-lg mt-3 bg-white hover:shadow-md">
        <div className="flex items-center gap-2 py-3 px-3">
          <div className="bg-blue-200 p-2 rounded-lg">
            <AiFillBook className="text-green-600" />
          </div>
          <p className="font-bold">Chapter 2</p>
        </div>
      </div>
    </div>
  );
};

export default ChaptersList;
