import React, { useEffect, useState } from 'react';
import firebaseConfig from '../firebase-config';
import { getFirestore, getDocs, doc, collection } from 'firebase/firestore';

const CourseContext = React.createContext();
const db = getFirestore();

export const CourseContextProvider = (props) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const courses = [];

      const querySnapshot = await getDocs(collection(db, 'courses'));
      querySnapshot.forEach((doc) => {
        courses.push({
          id: doc.id,
          author: doc.data().author,
          category: doc.data().category,
          description: doc.data().description,
          title: doc.data().title,
          price: doc.data().price,
          image: doc.data().image,
          video: doc.data().video,
        });
      });
      setCourses(courses);
    };

    fetchCourses();
  }, []);

  return (
    <CourseContext.Provider value={{ courses }}>
      {props.children}
    </CourseContext.Provider>
  );
};

export default CourseContext;
