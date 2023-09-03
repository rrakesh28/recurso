import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  collection,
  query,
  onSnapshot,
  where,
  addDoc,
} from "firebase/firestore";
import { db } from "../../database/firebase";
const Chapters = () => {
  const subjectId = useLocation().state.subjectId;

  const [chapter, setChapter] = useState("");
  const [modalView, setModalView] = useState(false);
  const [error, setError] = useState("");

  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "chapters"),
      where("subjectId", "==", subjectId)
    );
    onSnapshot(q, (querySnapshot) => {
      setChapters(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  });

  const addChapter = async () => {
    if (chapter.length < 1) {
      setError("Feilds can't be empty");
    } else {
      try {
        await addDoc(collection(db, "chapters"), {
          chapterName: chapter,
          subjectId: subjectId,
        });
        setModalView(false);
      } catch (err) {
        alert(err);
      }
    }
  };
  return (
    <div className="flex flex-col items-center">
      {chapters.map((chapter) => (
        <div className="mt-5 shadow-md px-5 py-5 rounded-lg">
          <Link
            to={{
              pathname: "/admin/topics/",
              state: { chapterId: chapter.id },
            }}
          >
            {chapter.data.chapterName}
          </Link>
        </div>
      ))}
      <div
        className="flex justify-center my-5 bg-blue-600 py-2 rounded-lg"
        onClick={() => setModalView(true)}
      >
        <button className="text-white">Add Chapter</button>
      </div>

      <div
        className={
          modalView
            ? "block border-2 p-[1rem] absolute border-black shadow-md rounded-lg items-center justify-center mt-36 bg-white"
            : "hidden"
        }
      >
        <div className="flex">
          <p>Chapter:</p>
          <input
            type="text"
            className="border-2 border-black rounded-lg ml-3 px-2"
            onChange={(e) => {
              setChapter(e.target.value);
            }}
          />
        </div>
        <div className="flex-mt-3 justify-center">
          <button
            className="text-white bg-red-600 mt-5 mr-2 rounded-lg px-5 py-2"
            onClick={() => {
              setModalView(false);
            }}
          >
            Cancel
          </button>
          <button
            className="text-white bg-blue-600 w-20 mt-5 rounded-lg px-5 py-2"
            onClick={addChapter}
          >
            Add
          </button>
        </div>
        <p className="text-red-600">{error}</p>
      </div>
    </div>
  );
};

export default Chapters;
