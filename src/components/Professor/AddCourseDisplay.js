import Footer from '../UI/Footer';
import HeaderProfessor from '../UI/HeaderProfessor';
import AddCourse from './AddCourse';

const AddCourseDisplay = () => {
  const addCourseHandler = async (courseData) => {
    await fetch(
      'https://react-http-bb74b-default-rtdb.firebaseio.com/courses.json',
      {
        method: 'POST',
        body: JSON.stringify({
          course: courseData,
        }),
      }
    );
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
