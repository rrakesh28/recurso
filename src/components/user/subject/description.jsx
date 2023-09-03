const Description = (props) => {
  return (
    <div className="mx-6 mt-[-10rem] lg:px-20">
      <div className="rounded-[1rem] shadow-lg pb-1 lg:flex h-[] lg:pb-0">
        <div className="flex items-center justify-center lineargradient1 h-[10rem] rounded-tl-[1rem] rounded-tr-[1rem] lg:rounded-tr-[0rem] lg:rounded-bl-[1rem] lg:h-[16rem] lg:w-[60rem]">
          <p className="text-white font-bold text-xl mx-6">{props.name}</p>
        </div>
        <div className="px-6 py-6 bg-white lg:mx-0 lg:my-0 lg:h-[12rem] lg:rounded-tr-[1rem] lg:rounded-br-[1rem]">
          <p className="font-bold text-xl">Course Description</p>
          <p className="mt-1">{props.description}</p>
          <div className="flex justify-center items-center bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-600 w-[10rem] h-[2rem] text-white mt-4 rounded-[0.2rem] px-3">
            Continue Reading
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
