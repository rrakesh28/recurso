import { IoMdShareAlt } from "react-icons/io";
const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-sky-900 via-sky-800 via-sky-700 to-sky-600 py-10 px-5">
      <p className="text-white font-bold text-2xl">
        Cryptographpy and Network Security
      </p>
      <button className="flex items-center gap-3 mt-3 px-10 py-4 font-bold text-sky-600 bg-white rounded-lg">
        <IoMdShareAlt />
        Share Feedback
      </button>
    </div>
  );
};

export default Hero;
