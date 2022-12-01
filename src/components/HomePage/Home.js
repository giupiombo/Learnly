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

  const courseIds = [];
  for (const userCourse of loggedUserCourses) {
    courseIds.push(userCourse.id);
  }

  const topPick = [];
  for (const course of courses) {
    if (
      course.category === loggedUserCourses[0].category &&
      !courseIds.includes(course.id)
    ) {
      topPick.push({
        id: course.id,
        author: course.author,
        title: course.title,
        description: course.description,
        category: course.category,
        price: course.price,
        video: course.video,
        image: course.image,
      });
    }
  }

  console.log(topPick);
  return (
    <div className={classes.home}>
      <h1>Home</h1>
      <h2>In progress</h2>
      {courseList}
      <h2>Top pick for you</h2>
      <CourseItem
        title={topPick[0].title}
        description={topPick[0].description}
        category={topPick[0].category}
        price={topPick[0].price}
        video={topPick[0].video}
        image={topPick[0].image}
        author={topPick[0].author}
        type={'categories'}
      />
    </div>
  );
};

export default Home;
