import { MdTopic } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillFileText } from "react-icons/ai";

import { useState } from "react";
const Sidebar = () => {
  const [topicListView, setTopicListView] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setTopicListView(true);
        }}
        className={
          !topicListView
            ? "bg-slate-900 p-2 w-14 top-1/4 fixed rounded-[0.2rem] transition duration-500"
            : "hidden"
        }
      >
        <MdTopic className="text-white text-3xl" />
      </div>
      <div
        className={
          topicListView
            ? "absolute w-screen h-screen bg-gray-50 flex justify-center transition duration-500"
            : "hidden"
        }
      >
        <div className="bg-slate-900 p-2 rounded-[0.2rem] mt-5 lg:w-[30rem]">
          <p className="font-bold text-lg text-white flex gap-1.5 justify-between items-center">
            Cryptography and Network Security
            <AiOutlineClose
              onClick={() => {
                setTopicListView(false);
              }}
              className="text-white font-bold"
            />
          </p>
          <p className="font-bold text-white text-sm mt-3">TOPICS</p>
          <p className="bg-green-600 w-[3rem] h-0.5"></p>

          <div className="flex items-center gap-1 backdrop-blur bg-white/20 supports-backdrop-blur:bg-white/95 rounded-[0.2rem] p-1 mt-2 text-white">
            <AiFillFileText className="text-white text-xl" />
            <p>Introduciton</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
