import { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../../database/firebase";
import Book from "./Book";
import { GrFormNext } from "react-icons/gr";
const Textbooks = () => {
  const [courses, setCourses] = useState([]);

  const coursesQuery = query(collection(db, "Courses"));
  onSnapshot(coursesQuery, (querySnapshot) => {
    setCourses(
      querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }))
    );
  });

  return (
    <div className="mx-6 mt-7">
      {courses.map((course) => (
        <>
          <div className="flex gap-3">
            <p className="font-bold text-lg">{course.data.CourseName}</p>
            <div className="flex items-center">
              <p className="text-xs w-[3rem]">View All</p>
              <div className="bg-green-600 rounded-full">
                <GrFormNext className="text-white" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 mx-2">
            <Book courseId={course.id} />
          </div>
        </>
      ))}
    </div>
  );
};

export default Textbooks;
