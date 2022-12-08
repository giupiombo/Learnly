import React, { useState } from 'react';
import classes from './SearchBar.module.css';
import { useContext } from 'react';
import CourseContext from '../../context/course-context';
import { useNavigate } from 'react-router-dom';
import SearchCourseContext from '../../context/search-course-context';

const SearchBar = () => {
  const { courses } = useContext(CourseContext);
  const [searchInput, setSearchInput] = useState('');
  const { setSearchedCourses } = useContext(SearchCourseContext);

  let navigate = useNavigate();

  const titles = [];
  for (const course of courses) {
    titles.push(course.title);
  }

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  let filterTitles;
  if (searchInput.length > 0) {
    filterTitles = titles.filter((title) => {
      return title.match(searchInput);
    });
  }

  const searchHandler = (e) => {
    e.preventDefault();

    const searchCourses = [];
    for (const course of courses) {
      if (filterTitles.includes(course.title)) {
        searchCourses.push(course);
      }
    }

    setSearchedCourses(searchCourses);

    navigate('/search');
  };

  return (
    <div className={classes.search}>
      <form onSubmit={searchHandler}>
        <input
          type="search"
          placeholder="Search here"
          onChange={handleChange}
          value={searchInput}
        />
      </form>
    </div>
  );
};

export default SearchBar;
