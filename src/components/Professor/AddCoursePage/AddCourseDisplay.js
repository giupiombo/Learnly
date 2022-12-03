import Footer from '../../Common/Footer';
import HeaderProfessor from '../HeaderProfessor';
import AddCourse from './AddCourse';
import { getFirestore, setDoc, doc, updateDoc, } from 'firebase/firestore';
import { storage } from '../../../firebase-config';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const db = getFirestore();
const metadata1 = {
  contentType1: 'thumbnails/jpeg'
}

const metadata2 = {
  contentType2: 'courseVideos/mov'
}

const AddCourseDisplay = () => {
  const addCourseHandler = async (
    titleValue,
    descriptionValue,
    categoryValue,
    priceValue,
    imageValue,
    videoValue,
    name
    ) => {
      const thumbnailRef = ref(storage, `thumbnails/${imageValue.name}`)
      await uploadBytes(thumbnailRef, imageValue, metadata1)
        getDownloadURL(ref(storage, `thumbnails/${imageValue.name}`))
          .then(async (url1) => {
            console.log(url1);
            const coursesRef = doc(db, 'courses', titleValue);
            await setDoc(coursesRef, {
              title: titleValue,
              description: descriptionValue,
              category: categoryValue,
              price: priceValue,
              image: url1,
              author: name
            });
          })
      const videoRef = ref(storage, `courseVideos/${videoValue.name}`)
      await uploadBytes(videoRef, videoValue, metadata2)
        getDownloadURL(ref(storage, `courseVideos/${videoValue.name}`))
          .then(async (url2) => {
            console.log(url2);
            const coursesRef = doc(db, 'courses', titleValue);
            await updateDoc(coursesRef, {
              video: url2
            });
          })
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
