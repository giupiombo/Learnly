import { useContext } from 'react';
import SearchCourseContext from '../../../context/search-course-context';

const Search = () => {
  const { searchCourses } = useContext(SearchCourseContext);

  return (
    <>
      <h1>search</h1>
      {console.log(searchCourses)}
    </>
  );
};

export default Search;
