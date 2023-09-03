const Subscribe = () => {
  return (
    <div className="bg-blue-200 items-center flex flex-col mt-10">
      <p className="text-2xl font-extrabold mt-8">Wanna hear from us?</p>
      <p className="mt-5">Drop your Email below!</p>
      <div className="mt-10 mb-20 flex justify-around">
        <input className="focus:outline-none h-8 rounded-lg px-2" type="text" />
        <button className="ml-5 border-black border-2 text-sm rounded-lg px-2">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
