import React, { useState } from 'react';

const SelectedCourseContext = React.createContext();

export const SelectedCourseContextProvider = (props) => {
  const [selectedCourse, setSelectedCourse] = useState({});

  const setCourse = (title, author, price, description, category, video) => {
    setSelectedCourse({
      title: title,
      author: author,
      price: price,
      description: description,
      category: category,
      video: video,
    });
  };

  return (
    <SelectedCourseContext.Provider value={{ selectedCourse, setCourse }}>
      {props.children}
    </SelectedCourseContext.Provider>
  );
};

export default SelectedCourseContext;
