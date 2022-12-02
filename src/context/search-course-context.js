import React, { useEffect, useState } from 'react';

const SearchCourseContext = React.createContext();

export const SearchCourseContextProvider = (props) => {
  const [searchCourses, setSearchCourses] = useState([]);

  const setSearchedCourses = (courses) => {
    setSearchCourses(courses);
  };

  return (
    <SearchCourseContext.Provider value={{ searchCourses, setSearchedCourses }}>
      {props.children}
    </SearchCourseContext.Provider>
  );
};

export default SearchCourseContext;
