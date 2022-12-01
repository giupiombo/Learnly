import React, { useEffect, useState } from 'react';
import firebaseConfig from '../firebase-config';
import { getFirestore, getDocs, doc, collection } from 'firebase/firestore';

const UserCourseContext = React.createContext();
const db = getFirestore();

export const UserCourseContextProvider = (props) => {
  const [userCourses, setUserCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const courses = [];

      const querySnapshot = await getDocs(collection(db, 'userCourse'));
      querySnapshot.forEach((doc) => {
        courses.push({
          student: doc.data().student,
          course: doc.data().course,
        });
      });
      setUserCourses(courses);
    };

    fetchCourses();
  }, []);

  return (
    <UserCourseContext.Provider value={{ userCourses }}>
      {props.children}
    </UserCourseContext.Provider>
  );
};

export default UserCourseContext;
