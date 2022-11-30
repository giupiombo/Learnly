import Footer from '../../Common/Footer';
import HeaderProfessor from '../HeaderProfessor';
import EditCourse from './EditCourse';
import { useContext } from 'react';
import SelectedCourseContext from '../../../context/selected-course-context';

import {
  getFirestore,
  updateDoc,
  setDoc,
  doc,
  collection,
} from 'firebase/firestore';

const db = getFirestore();

const EditCourseDisplay = () => {
  const { selectedCourse } = useContext(SelectedCourseContext);

  console.log(selectedCourse);
  console.log(selectedCourse.id);

  const editCourseHandler = async (
    titleValue,
    descriptionValue,
    categoryValue,
    priceValue,
    videoValue,
    imageValue
  ) => {
    const coursesRef = doc(db, 'courses', selectedCourse.id);
    await updateDoc(coursesRef, {
      title: titleValue,
      description: descriptionValue,
      category: categoryValue,
      price: priceValue,
      video: videoValue,
      image: imageValue,
    });
    // console.log(courseData);
    console.log('course added');
  };

  return (
    <>
      <HeaderProfessor />
      <EditCourse onEditCourse={editCourseHandler} />
      <Footer />
    </>
  );
};
export default EditCourseDisplay;
