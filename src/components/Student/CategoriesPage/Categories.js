import { useContext } from 'react';
import CourseContext from '../../../context/course-context';
import CourseItem from '../../UI/CourseItem';
import classes from './Categories.module.css';

const Categories = () => {
  const { courses } = useContext(CourseContext);
  let categories = [];

  for (const key in courses) {
    if (!categories.includes(courses[key].category)) {
      categories.push(courses[key].category);
    }
  }

  let webCourses = [];
  let mathCourses = [];

  for (const key in courses) {
    if (courses[key].category === 'web-development') {
      webCourses.push(courses[key]);
    } else if (courses[key].category === 'mathematics') {
      mathCourses.push(courses[key]);
    }
  }

  const webCourseList = webCourses.map((course) => (
    <CourseItem
      title={course.title}
      description={course.description}
      category={course.category}
      price={course.price}
      video={course.video}
      author={course.author}
    />
  ));

  const mathCourseList = mathCourses.map((course) => (
    <CourseItem
      title={course.title}
      description={course.description}
      category={course.category}
      price={course.price}
      video={course.video}
      author={course.author}
    />
  ));

  const categoryList = categories.map((category) => (
    <>
      <h2>{category}</h2>
      {category === 'web-development' ? webCourseList : mathCourseList}
    </>
  ));

  return (
    <div className={classes.category}>
      <h1>Categories</h1>
      {categoryList}
    </div>
  );
};

export default Categories;
