import Footer from '../Common/Footer';
import Header from './Header';
import classes from './Initial.module.css';

const Initial = () => {
  let categories = {
    category1: {
      name: 'Web-Development',
      image:
        'https://uploads-ssl.webflow.com/615af81f65d1ab72d2969269/62efdf9840dca733692cdd48_web%20dev%20basics.jpg',
      description:
        'Web development is the work involved in developing a website for the Internet It can range from developing a simple single static page to complex web applications.',
    },
    category2: {
      name: 'Mathematics',
      image:
        'https://assets.telegraphindia.com/telegraph/2021/Oct/1634901667_resized.jpg',
      description:
        'Mathematics may be studied in its own right, or as it is applied to other disciplines such as physics and engineering.',
    },
    category3: {
      name: 'Data Science',
      image:
        'https://gisgeography.com/wp-content/uploads/2021/12/Data-Scientist-Courses.png',
      description:
        'Data science is an interdisciplinary field that uses scientific methods to apply knowledge from data across a broad range of application domains.',
    },
  };

  return (
    <>
      <Header />
      <div className={classes.initial}>
        <h1>Join us today and improve your skills!</h1>
        <div className={classes.row}>
          {Object.keys(categories).map((key) => (
            <div className={classes.card}>
              <img src={`${categories[key].image}`} alt="new" />
              <h2>{categories[key].name}</h2>
              <p>{categories[key].description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Initial;
