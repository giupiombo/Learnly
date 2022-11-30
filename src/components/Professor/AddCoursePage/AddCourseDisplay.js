import Footer from '../../Common/Footer';
import HeaderProfessor from '../HeaderProfessor';
import AddCourse from './AddCourse';
import {
  getFirestore,
  setDoc,
  doc,
  collection,
} from 'firebase/firestore';

const db = getFirestore();

const AddCourseDisplay = () => {
  const addCourseHandler = async (
    courseData
    ) => {
      const coursesRef = doc(collection(db, "courses"));
          await setDoc(coursesRef, courseData
        )
        console.log(courseData)
        console.log('course added');
  };

  return (
    <>
      <HeaderProfessor />
      <AddCourse onAddCourse={addCourseHandler} />
      <Footer />
    </>
  );
};

export default AddCourseDisplay;
