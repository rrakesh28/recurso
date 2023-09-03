import { AiFillStar } from "react-icons/ai";
import { useState, useEffect } from "react";
import { collection, query, onSnapshot, where } from "firebase/firestore";
import { db } from "../../../database/firebase";
import { Link } from "react-router-dom";
const Book = (props) => {
  const courseId = props.courseId;

  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "subjects"),
      where("courseId", "==", courseId)
    );
    onSnapshot(q, (querySnapshot) => {
      setSubjects(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  });
  return (
    <div>
      {subjects.map((subject) => (
        <Link
          to={{ pathname: "/subject/" + subject.id }}
          className="block shadow-xl rounded-[0.2rem mt-4] w-[18rem] mt-4"
        >
          <div className="h-[10rem] rounded-[0.2rem] flex items-center justify-center lineargradient1 px-7">
            <p className="text-white font-bold text-lg">
              {subject.data.subjectName}
            </p>
          </div>
          <div className="px-4 py-2 mb-4">
            <div className="flex items-center gap-1 border-2 border-gray-300 w-[3.5rem] p-[0.3rem] rounded-lg">
              <AiFillStar className="text-yellow-500" />
              <p className="text-gray-500 text-base">{subject.data.rating}</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <strike className="text-gray-400 text-base">
                  $ {subject.data.price}
                </strike>
                <p className="font-bold">Free</p>
              </div>
              <button className="bg-green-600 text-white text-base font-bold h-[1.7rem] w-[7rem] rounded-[0.2rem] hover:border-2 hover:border-green-600 hover:bg-white hover:text-green-600">
                Explore
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Book;
