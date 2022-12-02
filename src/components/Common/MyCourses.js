import { useContext } from 'react';
import CourseContext from '../../context/course-context';
import UserContext from '../../context/user-context';
import UserCourseContext from '../../context/user-courses-context';
import CourseItem from '../UI/CourseItem';
import classes from './MyCourses.module.css';

const MyCourses = () => {
  const { loggedUser } = useContext(UserContext);
  const { courses } = useContext(CourseContext);
  const { userCourses } = useContext(UserCourseContext);

  console.log(userCourses);

  let loggedUserCourses = [];

  if (loggedUser.accountType === 'professor') {
    for (const key in courses) {
      if (courses[key].author === loggedUser.name) {
        loggedUserCourses.push({
          id: courses[key].id,
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
  } else {
    for (const item in userCourses) {
      if (userCourses[item].student === loggedUser.id) {
        for (const key in courses) {
          if (courses[key].id === userCourses[item].course) {
            loggedUserCourses.push({
              id: courses[key].id,
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
      }
    }
  }

  const courseList = loggedUserCourses.map((course) => (
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
    <div className={classes.course}>
      <h1>My Courses</h1>
      {courseList}
    </div>
  );
};

export default MyCourses;
