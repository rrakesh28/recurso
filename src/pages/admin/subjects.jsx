import { useState, useEffect } from "react";
import {
  collection,
  query,
  onSnapshot,
  where,
  addDoc,
} from "firebase/firestore";
import { Link, useLocation, useParams } from "react-router-dom";
import { db } from "../../database/firebase";
const Subjects = () => {
  const [subjects, setSubjects] = useState([]);

  const [modalView, setModalView] = useState(false);
  const [subject, setSubject] = useState("");
  const [error, setError] = useState("");
  const [description, setDescription] = useState("");
  const [objectives, setObjectives] = useState("");
  const [outcomes, setOutcomes] = useState("");
  const [price, setPrice] = useState(1);
  const [rating, setRating] = useState(1);

  const courseId = useLocation().state.courseId;

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

  const addSubject = async (e) => {
    if (subject.length < 1) {
      setError("Feild can't be empty");
    } else {
      try {
        await addDoc(collection(db, "subjects"), {
          subjectName: subject,
          description: description,
          objectives: objectives,
          outcomes: outcomes,
          courseId: courseId,
          price: price,
          rating: rating,
        });
        setModalView(false);
      } catch (err) {
        alert(err);
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      {subjects.map((subject) => (
        <div className="mt-5 shadow-md px-5 py-5 rounded-lg">
          <Link
            to={{
              pathname: "/admin/chapters",
              state: { subjectId: subject.id },
            }}
          >
            {subject.data.subjectName}
          </Link>
        </div>
      ))}
      <button
        className="text-white bg-blue-600 mt-10 px-10 py-2 rounded-lg"
        onClick={() => {
          setModalView(true);
        }}
      >
        Add Subject
      </button>

      <div
        className={
          modalView
            ? " block border-2 absolute border-black p-[1rem] shadow-md rounded-lg items-center justify-center mt-5 bg-white"
            : "hidden"
        }
      >
        <div className="flex">
          <p>Subject</p>
          <input
            type="text"
            className="border-2 border-black rounded-lg ml-3 px-2"
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
        </div>
        <div className="flex">
          <p>Rating:</p>
          <input
            type="number"
            className="border-2 border-black rounded-lg ml-3 px-2"
            onChange={(e) => {
              setRating(parseFloat(e.target.value));
            }}
          />
        </div>
        <div className="flex">
          <p>Price:</p>
          <input
            type="number"
            className="border-2 border-black rounded-lg ml-3 px-2"
            onChange={(e) => {
              setPrice(parseFloat(e.target.value));
            }}
          />
        </div>
        <div className="flex mt-5">
          <p>Description:</p>
          <textarea
            cols="30"
            rows="4"
            className="border-2 border-black rounded-lg"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="flex mt-5">
          <p>Outcomes:</p>
          <textarea
            cols="30"
            rows="7"
            className="border-2 border-black rounded-lg"
            onChange={(e) => {
              setOutcomes(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="flex mt-5">
          <p>Objectives:</p>
          <textarea
            cols="30"
            rows="7"
            className="border-2 border-black rounded-lg"
            onChange={(e) => setObjectives(e.target.value)}
          ></textarea>
        </div>
        <div className="flex mt-3 justify-center">
          <button
            className="text-white bg-red-600 mt-5 mr-2 rounded-lg px-5 py-2"
            onClick={() => setModalView(false)}
          >
            Cancel
          </button>
          <button
            className="text-white bg-blue-600 w-20 mt-5 rounded-lg px-5 py-2"
            onClick={addSubject}
          >
            Add
          </button>
        </div>
        <p className="text-red-600">{error}</p>
      </div>
    </div>
  );
};

export default Subjects;
