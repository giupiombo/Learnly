import Footer from '../../Common/Footer';
import HeaderProfessor from '../HeaderProfessor';
import EditCourse from './EditCourse';
import { useContext } from 'react';
import SelectedCourseContext from '../../../context/selected-course-context';
import { getFirestore, updateDoc, doc } from 'firebase/firestore';
import { storage } from '../../../firebase-config';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const db = getFirestore();
const metadata1 = {
  contentType1: 'thumbnails/jpeg'
}

const metadata2 = {
  contentType2: 'courseVideos/mov'
}

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
    imageValue,
    name
  ) => {
    const thumbnailRef = ref(storage, `thumbnails/${imageValue.name}`)
      await uploadBytes(thumbnailRef, imageValue, metadata1)
        getDownloadURL(ref(storage, `thumbnails/${imageValue.name}`))
          .then(async (url1) => {
            console.log(url1);
            const coursesRef = doc(db, 'courses', selectedCourse.id);
            await updateDoc(coursesRef, {
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
            const coursesRef = doc(db, 'courses', selectedCourse.id);
            await updateDoc(coursesRef, {
              video: url2
            });
          })
    console.log('course updated');
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
