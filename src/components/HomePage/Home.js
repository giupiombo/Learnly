import { useContext } from 'react';
import CourseContext from '../../context/course-context';
import UserContext from '../../context/user-context';
import UserCourseContext from '../../context/user-courses-context';
import CourseItem from '../UI/CourseItem';
import classes from './Home.module.css';

const Home = () => {
  const { loggedUser } = useContext(UserContext);
  const { courses } = useContext(CourseContext);
  const { userCourses } = useContext(UserCourseContext);

  let loggedUserCourses = [];

  for (const item in userCourses) {
    if (userCourses[item].student === loggedUser.name) {
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
    <div className={classes.home}>
      <h1>Home</h1>
      <h2>In progress</h2>
      {courseList}
      <h2>Top pick for you</h2>
      <CourseItem
        title={courses[1].title}
        description={courses[1].description}
        category={courses[1].category}
        price={courses[1].price}
        video={courses[1].video}
        image={courses[1].image}
        author={courses[1].author}
        type={'categories'}
      />
    </div>
  );
};

export default Home;
