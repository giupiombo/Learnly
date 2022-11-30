import Footer from '../../Common/Footer';
import HeaderProfessor from '../HeaderProfessor';
import AddCourse from './AddCourse';
import {
  getFirestore,
  serverTimestamp,
  setDoc,
  doc,
  collection,
  addDoc
} from 'firebase/firestore';

const db = getFirestore();

const AddCourseDisplay = () => {
  const addCourseHandler = async (
    // titleValue,
    // descriptionValue,
    // categoryValue,
    // priceValue,
    // videoValue,
    // imageValue,
    // name
    courseData
    ) => {
      const coursesRef = doc(collection(db, "courses"));
          await setDoc(coursesRef, courseData
          // {
            // title: titleValue,
            // description: descriptionValue,
            // category: categoryValue,
            // price: priceValue,
            // video: videoValue,
            // image: imageValue,
            // author: name,
        // }
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
