import Footer from '../../Common/Footer';
import HeaderProfessor from '../HeaderProfessor';
import AddCourse from './AddCourse';
import {
  getFirestore,
  setDoc,
  doc,
  collection,
} from 'firebase/firestore';
import { storage } from '../../../firebase-config';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';

const db = getFirestore();

const AddCourseDisplay = () => {
  const addCourseHandler = async (
    titleValue,
    descriptionValue,
    categoryValue,
    priceValue,
    imageValue,
    videoValue
    ) => {
      const coursesRef = doc(collection(db, "courses"));
        await setDoc(coursesRef, {
          title: titleValue,
          description: descriptionValue,
          category: categoryValue,
          price: priceValue,
        });
        console.log('course added');
      
      const thumbnailRef = ref(storage, `thumbnails/${imageValue.name + v4()}`)
        await uploadBytes(thumbnailRef, imageValue)
          console.log("image uploaded")

      const videoRef = ref(storage, `courseVideos/${videoValue.name + v4()}`)
        await uploadBytes(videoRef, videoValue)
          console.log("video uploaded")
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
