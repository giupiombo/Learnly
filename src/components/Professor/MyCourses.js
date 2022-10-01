import { useEffect, useState } from 'react';
import CourseItem from '../UI/CourseItem';
import classes from './MyCourses.module.css';

const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        'https://react-http-bb74b-default-rtdb.firebaseio.com/courses.json'
      );

      if (!response.ok) {
        throw new Error('Invalid Account!');
      }

      const responseData = await response.json();

      const courses = [];

      for (const key in responseData) {
        courses.push({
          author: responseData[key].course.author,
          title: responseData[key].course.title,
          description: responseData[key].course.description,
          category: responseData[key].course.category,
          price: responseData[key].course.price,
          video: responseData[key].course.video,
        });
      }
      setCourses(courses);
      setIsLoading(false);
    };

    fetchUsers().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  const courseList = courses.map(
    (course) => (
      // if (course.author === 'Chase Ohlenburger' /*loggedUser name*/) {
      <CourseItem
        title={course.title}
        description={course.description}
        category={course.category}
        price={course.price}
        video={course.video}
      />
    )
    // }
  );

  console.log(courses);

  return (
    <div className={classes.course}>
      <h1>My Courses</h1>
      {courseList}
    </div>
  );
};

export default MyCourses;
