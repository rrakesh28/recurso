function Hero() {
  return (
    <div className="bg-blue-200 px-5 py-5">
      <p className="font-black text-4xl pr-28">
        Everything you need and All you need
      </p>
      <p className="mt-8">
        Recurso helps in giving all the resources required for you to prepare
      </p>
      <div className="bg-white px-3 py-3 rounded-3xl mt-5 flex">
        <input
          className="w-[17rem] focus:outline-none px-2"
          type="text"
          placeholder="Ask something"
        />
        <div className="bg-black p-1 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="text-white h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Hero;
