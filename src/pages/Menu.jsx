const Menu = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-between py-8 px-8">
        <p>Logo</p>
        <p>Cancel</p>
      </div>
      <div className="flex flex-col items-center justify-center mt-16">
        <p className="text-xl font-extrabold">Get's Started</p>
        <button className="border-black rounded-3xl border-2 text-sm mt-5 px-5 py-2">
          LOGIN
        </button>
        <button className="border-black rounded-3xl border-2 text-sm mt-3 px-5 py-2">
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default Menu;
