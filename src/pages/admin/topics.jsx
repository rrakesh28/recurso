import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  collection,
  query,
  onSnapshot,
  where,
  addDoc,
} from "firebase/firestore";
import { db } from "../../database/firebase";
const Topics = () => {
  const chapterId = useLocation().state.chapterId;

  const [topic, setTopic] = useState("");
  const [textContentUrl, setTextContentUrl] = useState("");
  const [videoContentUrl, setVideoContentUrl] = useState("");
  const [modalView, setModalView] = useState(false);
  const [error, setError] = useState("");

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
  });

  const addTopic = async () => {
    if (
      topic.length < 1 ||
      textContentUrl.length < 1 ||
      videoContentUrl.length < 1
    ) {
      setError("Feild's cant' be empty");
    } else {
      try {
        await addDoc(collection(db, "topics"), {
          topicName: topic,
          textContentUrl: textContentUrl,
          videoContentUrl: videoContentUrl,
          chapterId: chapterId,
        });
        setModalView(false);
      } catch (err) {
        alert(err);
      }
    }
  };
  return (
    <div className="flex flex-col items-center">
      {topics.map((topic) => (
        <div className="flex-col mt-5 shadow-md px-5 py-5 rounded-lg">
          <p>{topic.data.topicName}</p>
          <a className="mr-2" href={topic.data.textContentUrl}>
            {topic.data.textContentUrl}
          </a>
          <a href={topic.data.videoContentUrl}>{topic.data.videoContentUrl}</a>
        </div>
      ))}
      <button
        className="text-white bg-blue-600 mt-10 px-19 py-2 rounded-lg"
        onClick={() => {
          setModalView(true);
        }}
      >
        Add Topic
      </button>
      <div
        className={
          modalView
            ? "block border-2 p-[1rem] absolute border-black shadow-md rounded-lg items-center mt-36 bg-white"
            : "hidden"
        }
      >
        <div className="flex">
          <p>Topic:</p>
          <input
            className="border-2 border-black rounded-lg ml-3 px-2"
            onChange={(e) => {
              setTopic(e.target.value);
            }}
          />
        </div>
        <div className="flex mt-5">
          <p>Text Url:</p>
          <input
            type="text"
            className="border-2 border-black rounded-lg ml-3 px-2"
            onChange={(e) => {
              setTextContentUrl(e.target.value);
            }}
          />
        </div>
        <div className="flex mt-5">
          <p>Video Url:</p>
          <input
            type="text"
            className="border-2 border-black rounded-lg ml-3 px-2"
            onChange={(e) => {
              setVideoContentUrl(e.target.value);
            }}
          />
        </div>
        <div className="flex mt-3 justify-center">
          <button className="text-white bg-red-600 w-20 mt-5 mr-2 rounded-lg px-5 py-2">
            Cancel
          </button>
          <button
            className="text-white bg-blue-600 w-200 mt-5 mr-2 rounded-lg px-5 py-2"
            onClick={addTopic}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topics;
