import { useContext } from 'react';
import SearchCourseContext from '../../../context/search-course-context';
import CourseItem from '../../UI/CourseItem';
import HeaderStudent from '../HeaderStudent';
import Footer from '../../Common/Footer';
import classes from './Search.module.css';

const Search = () => {
  const { searchCourses } = useContext(SearchCourseContext);
  const courseList = searchCourses.map((course) => (
    <CourseItem
      id={course.id}
      title={course.title}
      price={course.price}
      video={course.video}
      author={course.author}
      description={course.description}
      category={course.category}
      image={course.image}
    />
  ));

  return (
    <div className={classes.search}>
      <HeaderStudent />
      <h1>Searched Course</h1>
      {courseList}
      <Footer />
    </div>
  );
};

export default Search;
