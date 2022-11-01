import { useContext } from 'react';
import CourseContext from '../../context/course-context';
import CourseItem from '../UI/CourseItem';
import classes from './Home.module.css';

const Home = () => {
  const { courses } = useContext(CourseContext);

  return (
    <div className={classes.home}>
      <h1>Home</h1>
      <h2>In progress</h2>
      <CourseItem
        title={courses[0].title}
        description={courses[0].description}
        category={courses[0].category}
        price={courses[0].price}
        video={courses[0].video}
        image={courses[0].image}
        author={courses[0].author}
        type={'categories'}
      />
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
