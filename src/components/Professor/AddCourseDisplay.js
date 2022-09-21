import { useState } from 'react';
import Footer from '../UI/Footer';
import HeaderProfessor from '../UI/HeaderProfessor';
import AddCourse from './AddCourse';

const AddCourseDisplay = () => {
  const [courseList, setCourseList] = useState([]);

  const addCourseHandler = (title, description, category, price, video) => {
    setCourseList((prevCourseList) => {
      return [
        ...prevCourseList,
        {
          title: title,
          description: description,
          category: category,
          price: price,
          video: video,
          id: Math.random().toString(),
        },
      ];
    });
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
