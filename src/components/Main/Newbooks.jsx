function NewBooks() {
  return (
    <div className="w-full mt-10">
      <div className="flex justify-center">
        <p className="text-white bg-green-500 w-[9rem] rounded-lg font-bold px-2">
          NEW ARRIVALS
        </p>
      </div>
      <div className="flex mt-10 justify-around">
        <div className="w-[7rem]">
          <img
            className="w-[6rem] rounded-lg"
            alt=""
            src="https://firebasestorage.googleapis.com/v0/b/recurso-web.appspot.com/o/book%20cover%2Fcryptography.png?alt=media&token=120c2bf3-4a49-4a09-a413-ac27a2a67449"
          />
          <p className="mt-4 font-bold">Cryptography and Network Security</p>
        </div>
        <div className="w-[7rem]">
          <img
            className="w-[6rem] rounded-lg"
            alt=""
            src="https://firebasestorage.googleapis.com/v0/b/recurso-web.appspot.com/o/book%20cover%2Fcryptography.png?alt=media&token=120c2bf3-4a49-4a09-a413-ac27a2a67449"
          />
          <p className="mt-4 font-bold">Cryptography and Network Security</p>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <p className="bg-black text-white rounded-2xl px-3 py-1 font-bold text-lg">
          Find More
        </p>
      </div>
    </div>
  );
}

export default NewBooks;
