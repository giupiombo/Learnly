import React, { useState } from 'react';

const SelectedCourseContext = React.createContext();

export const SelectedCourseContextProvider = (props) => {
  const [selectedCourse, setSelectedCourse] = useState({});

  const setCourse = (
    id,
    title,
    author,
    price,
    description,
    category,
    video,
    image
  ) => {
    setSelectedCourse({
      id: id,
      title: title,
      author: author,
      price: price,
      description: description,
      category: category,
      video: video,
      image: image,
    });
  };

  return (
    <SelectedCourseContext.Provider value={{ selectedCourse, setCourse }}>
      {props.children}
    </SelectedCourseContext.Provider>
  );
};

export default SelectedCourseContext;
