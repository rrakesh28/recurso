import Article from "./article";
import Video from "./video";
import { useState } from "react";
const Content = () => {
  const [activeTab, setActiveTab] = useState("article");
  return (
    <div className="py-5 h-screen">
      <p className="w-screen flex justify-center font-bold text-xl lg:text-3xl">
        Introduction to Cryptography
      </p>
      <hr className="h-[0.1rem] mt-5 w-screen bg-black" />
      <div className="flex gap-2 mt-2">
        <div className="ml-2 lg:ml-[20rem]">
          <button
            onClick={() => {
              setActiveTab("article");
            }}
            className={
              activeTab === "article"
                ? "bg-green-600 font-bold text-white rounded-[0.2rem] p-1 group transition duration-300"
                : "bg-white text-black border-2 border-green-60 p-1 rounded-[0.2rem]"
            }
          >
            Article
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setActiveTab("video");
            }}
            className={
              activeTab === "video"
                ? "bg-green-600 font-bold text-white rounded-[0.2rem] p-1 group transition duration-300"
                : "bg-white text-black border-2 border-green-60 p-1 rounded-[0.2rem]"
            }
          >
            Video
          </button>
        </div>
      </div>
      <div className="flex gap-2 ml-2 lg:ml-[20rem]">
        <p>Source:</p>
        <div>
          <a href="" className="text-blue-600">
            hello
          </a>
        </div>
      </div>
      <div className="w-screen h-full mt-5 flex justify-center">
        {activeTab === "article" ? <Article /> : <Video />}
      </div>
    </div>
  );
};

export default Content;
