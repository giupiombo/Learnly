import { useContext } from 'react';
import CourseContext from '../../../context/course-context';
import CourseItem from '../../UI/CourseItem';
import classes from './Categories.module.css';

const Categories = () => {
  const { courses } = useContext(CourseContext);
  let categoriesMap = {};

  for (const course of courses) {
    if (!(course.category in categoriesMap)) {
      categoriesMap[course.category] = [course];
    } else {
      categoriesMap[course.category].push(course);
    }
  }

  const categoryList = (
    <div>
      {Object.keys(categoriesMap).map((key) => (
        <>
          <h2>{key}</h2>
          <div className={classes.row}>
            {categoriesMap[key].map((course) => (
              <CourseItem
                title={course.title}
                description={course.description}
                category={course.category}
                price={course.price}
                video={course.video}
                image={course.image}
                author={course.author}
                type={'categories'}
              />
            ))}
          </div>
        </>
      ))}
    </div>
  );

  return (
    <div className={classes.category}>
      <h1>Categories</h1>
      {categoryList}
    </div>
  );
};

export default Categories;
