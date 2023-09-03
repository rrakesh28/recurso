const Header = () => {
  return (
    <div className="flex justify-between p-5 items-center shadow-lg">
      <p className="cursive text-xl font-bold">Recurso</p>
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-white bg-black rounded-full p-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
