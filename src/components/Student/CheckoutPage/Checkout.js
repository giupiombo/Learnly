import { useContext } from 'react';
import Footer from '../../Common/Footer';
import Card from '../../UI/Card';
import HeaderStudent from '../HeaderStudent';
import classes from './Checkout.module.css';
import SelectedCourseContext from '../../../context/selected-course-context';
import Button from '../../UI/Button';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { selectedCourse } = useContext(SelectedCourseContext);
  let navigate = useNavigate();

  const backHandler = () => {
    navigate('/categories');
  };

  return (
    <>
      <HeaderStudent />
      <Card className={classes.input}>
        <h2>Checkout</h2>
        <form>
          <label htmlFor="address">Address</label>
          <input id="address" type="text" />
          <label htmlFor="zipCode">Zip Code</label>
          <input id="zipCode" type="text" />
          <label htmlFor="cardNumber">Card Number</label>
          <input id="cardNumber" type="text" />
          <label htmlFor="cvv">CVV</label>
          <input id="cvv" type="text" />
          <label htmlFor="expirationDate">Expiration Date</label>
          <input id="expirationDate" type="date" />
        </form>
        <h3>Summary</h3>
        <p>Total: ${parseFloat(selectedCourse.price).toFixed(2)}</p>
        <Button>Complete Checkout</Button>
        <button type="button" className={classes.text} onClick={backHandler}>
          Cancel
        </button>
      </Card>
      <Footer />
    </>
  );
};

export default Checkout;
