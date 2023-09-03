import { useEffect, useState } from "react";
import { collection, query, onSnapshot, where } from "firebase/firestore";
import { db } from "../../database/firebase";
const GetSubject = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "subjects"),
      where("subjectName", "==", "Cryptography and Network Secrurity")
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
        <div>
          <div>{subject.data.subjectName}</div>
          <div>{subject.data.description}</div>
          <div
            dangerouslySetInnerHTML={{ __html: subject.data.objectives }}
          ></div>
          <div
            dangerouslySetInnerHTML={{ __html: subject.data.outcomes }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default GetSubject;
