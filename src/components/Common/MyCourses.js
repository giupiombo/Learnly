import { useContext } from 'react';
import CourseContext from '../../context/course-context';
import UserContext from '../../context/user-context';
import CourseItem from '../UI/CourseItem';
import classes from './MyCourses.module.css';

const MyCourses = () => {
  const { loggedUser } = useContext(UserContext);
  const { courses } = useContext(CourseContext);

  let userCourses = [];
  for (const key in courses) {
    if (loggedUser.accountType === 'professor') {
      if (courses[key].author === loggedUser.name) {
        userCourses.push({
          author: courses[key].author,
          title: courses[key].title,
          description: courses[key].description,
          category: courses[key].category,
          price: courses[key].price,
          video: courses[key].video,
          image: courses[key].image,
        });
      }
    } else {
      userCourses.push({
        author: courses[key].author,
        title: courses[key].title,
        description: courses[key].description,
        category: courses[key].category,
        price: courses[key].price,
        video: courses[key].video,
        image: courses[key].image,
      });
    }
  }

  const courseList = userCourses.map((course) => (
    <CourseItem
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
    <div className={classes.course}>
      <h1>My Courses</h1>
      {courseList}
    </div>
  );
};

export default MyCourses;
