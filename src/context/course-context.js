import React, { useEffect, useState } from 'react';
import firebaseConfig from '../firebase-config';
import { getFirestore, getDocs, doc, collection } from 'firebase/firestore';

const CourseContext = React.createContext();
const db = getFirestore();

export const CourseContextProvider = (props) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      // const response = await fetch(
      //   'https://react-http-bb74b-default-rtdb.firebaseio.com/courses.json'
      // );

      // const responseData = await response.json();

      // const docRef = doc(db, 'courses');
      // const docSnap = await getDoc(docRef);
      // const responseData = docSnap.data();

      const courses = [];

      const querySnapshot = await getDocs(collection(db, 'courses'));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
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

      // for (const key in responseData) {
      //   courses.push({
      //     author: responseData[key].course.author,
      //     title: responseData[key].course.title,
      //     description: responseData[key].course.description,
      //     category: responseData[key].course.category,
      //     price: responseData[key].course.price,
      //     video: responseData[key].course.video,
      //     image: responseData[key].course.image,
      //   });
      // }
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
