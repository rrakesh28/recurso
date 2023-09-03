import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";

import { useState, useEffect } from "react";
import { collection, query, onSnapshot, where } from "firebase/firestore";
import { db } from "../../../database/firebase";
const Accordian = (props) => {
  const chapterId = props.chapterId;

  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "topics"),
      where("chapterId", "==", chapterId)
    );
    onSnapshot(q, (querySnapshot) => {
      setTopics(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const handleSetIndex = (index) =>
    props.activeIndex !== props.index
      ? props.setActiveIndex(props.index)
      : props.setActiveIndex(-1);

  return (
    <div className="w-screen flex flex-col items-center mt-5">
      <div
        className="bg-white w-[20rem] rounded-[0.2rem] lg:w-[50rem]"
        onClick={() => handleSetIndex(props.index)}
      >
        <div className="flex gap-2 items-center px-4 py-2">
          <p className="text-green-600 font-bold">{props.index + 1}.</p>
          <p className="flex-1 font-bold">{props.chapterName}</p>
          {props.activeIndex === props.index ? (
            <AiOutlineUp />
          ) : (
            <AiOutlineDown />
          )}
        </div>
        {props.activeIndex === props.index && (
          <div style={{ transition: "all 10s ease-in-out" }} className="mx-10">
            <p>
              {topics.map((topic) => (
                <span>{topic.data.topicName},</span>
              ))}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
