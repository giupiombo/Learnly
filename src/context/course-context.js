import React, { useEffect, useState } from 'react';

const CourseContext = React.createContext();

export const CourseContextProvider = (props) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch(
        'https://react-http-bb74b-default-rtdb.firebaseio.com/courses.json'
      );

      const responseData = await response.json();

      const courses = [];

      for (const key in responseData) {
        courses.push({
          author: responseData[key].course.author,
          title: responseData[key].course.title,
          description: responseData[key].course.description,
          category: responseData[key].course.category,
          price: responseData[key].course.price,
          video: responseData[key].course.video,
          image: responseData[key].course.image,
        });
      }
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
