import Accordian from "./accordian";
import { useState, useEffect } from "react";
import {
  collection,
  query,
  onSnapshot,
  where,
  orderBy,
} from "firebase/firestore";
import { db } from "../../../database/firebase";
const Content = (props) => {
  const subjectId = props.subjectId;

  const [chapters, setChapters] = useState([]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const q = query(
      collection(db, "chapters"),
      where("subjectId", "==", subjectId),
      orderBy("chapterName", "asc")
    );
    onSnapshot(q, (querySnapshot) => {
      setChapters(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="mt-10 pb-10 bg-gray-200">
      <div className="w-screen flex justify-center">
        <p className="font-bold text-xl mt-5">Course Content</p>
      </div>
      <div className="mt-5">
        {chapters.map((chapter, index) => (
          <Accordian
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            chapterId={chapter.id}
            chapterName={chapter.data.chapterName}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;
