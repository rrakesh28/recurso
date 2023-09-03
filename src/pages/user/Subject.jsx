import Header from "../../components/user/Header";
import Hero from "../../components/user/subject/Hero";
import Description from "../../components/user/subject/description";
import Objectives from "../../components/user/subject/objectives";
import Outcomes from "../../components/user/subject/outcomes";
import Content from "../../components/user/subject/content";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  collection,
  query,
  onSnapshot,
  where,
  documentId,
} from "firebase/firestore";
import { db } from "../../database/firebase";
const Subject = () => {
  const { subjectId } = useParams();
  const [subjectData, setSubjectData] = useState([]);
  useEffect(() => {
    const q = query(
      collection(db, "subjects"),
      where(documentId(), "==", subjectId)
    );
    onSnapshot(q, (querySnapshot) => {
      setSubjectData(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      {subjectData.map((item) => (
        <>
          <Description
            name={item.data.subjectName}
            description={item.data.description}
          />
          <Objectives objectives={item.data.objectives} />
          <Outcomes outcomes={item.data.outcomes} />
        </>
      ))}
      <Content subjectId={subjectId} />
    </div>
  );
};

export default Subject;
