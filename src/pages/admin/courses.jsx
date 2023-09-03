import { useState, useEffect } from "react";
import { collection, query, onSnapshot, addDoc } from "firebase/firestore";
import { db } from "../../database/firebase";
import { Link } from "react-router-dom";
const AdminCourses = () => {
  const [courses, setCourses] = useState([]);

  const [modalView, setModalView] = useState(false);
  const [course, setCourse] = useState("");
  const [abb, setAbb] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const q = query(collection(db, "Courses"));
    onSnapshot(q, (querySnapshot) => {
      setCourses(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  });

  const addCourse = async (e) => {
    if (course.length < 1 || abb.length < 1) {
      setError("Feild's Can't be emtpy");
    } else {
      try {
        await addDoc(collection(db, "Courses"), {
          CourseName: course,
          abb: abb,
        });
        setModalView(false);
      } catch (err) {
        alert(err);
      }
    }
  };

  return (
    <div className="flex justify-center">
      <div className="mt-20">
        {courses.map((course) => (
          <div className="mt-5 shadow-md px-5 py-5 rounded-lg">
            <Link
              to={{
                pathname: "/admin/subjects/" + course.id,
                state: { courseId: course.id },
              }}
            >
              {course.data.CourseName}
            </Link>
          </div>
        ))}
        <div className="flex justify-center my-5 bg-blue-600 py-2 rounded-lg">
          <button className="text-white" onClick={() => setModalView(true)}>
            Add Courses
          </button>
        </div>
      </div>

      <div className={modalView ? "block absolute" : "hidden"}>
        <div className="border-2 border-black p-[1rem] shadow-md rounded-lg items-center justify-center mt-36 bg-white">
          <div className="flex">
            <p>Course:</p>
            <input
              className="border-2 border-black rounded-lg ml-3 px-2"
              type="text"
              onChange={(e) => {
                setCourse(e.target.value);
              }}
            />
          </div>

          <div className="flex mt-5">
            <p>Abbrevation:</p>
            <input
              type="text"
              className="border-2 border-black rounded-lg ml-3 px-2"
              onChange={(e) => {
                setAbb(e.target.value);
              }}
            />
          </div>
          <div className="flex mt-3 justify-center">
            <button
              className="text-white bg-red-600 w-20 mt-5 mr-2 rounded-lg px-5 py-2"
              onClick={() => setModalView(false)}
            >
              Cancel
            </button>
            <button
              className="text-white bg-blue-600 w-20 mt-5 rounded-lg px-5 py-2"
              onClick={addCourse}
            >
              Add
            </button>
          </div>
          <p className="text-red-600 ">{error}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminCourses;
