import { useContext } from 'react';
import Card from '../../UI/Card';
import classes from './Checkout.module.css';
import SelectedCourseContext from '../../../context/selected-course-context';
import Button from '../../UI/Button';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../../context/user-context';
import useInput from '../../../hooks/use-input';

const isNotEmpty = (value) => value.trim() !== '';
const isPrice = (value) => value > 0;

const Checkout = (props) => {
  const { loggedUser } = useContext(UserContext);
  const { selectedCourse } = useContext(SelectedCourseContext);

  const {
    value: addressValue,
    isValid: addressIsValid,
    hasError: addressHasError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddress,
  } = useInput(isNotEmpty);

  const {
    value: zipCodeValue,
    isValid: zipCodeIsValid,
    hasError: zipCodeHasError,
    valueChangeHandler: zipCodeChangeHandler,
    inputBlurHandler: zipCodeBlurHandler,
    reset: resetZipCode,
  } = useInput(isNotEmpty);

  const {
    value: cardValue,
    isValid: cardIsValid,
    hasError: cardHasError,
    valueChangeHandler: cardChangeHandler,
    inputBlurHandler: cardBlurHandler,
    reset: resetCard,
  } = useInput(isNotEmpty);

  const {
    value: cvvValue,
    isValid: cvvIsValid,
    hasError: cvvHasError,
    valueChangeHandler: cvvChangeHandler,
    inputBlurHandler: cvvBlurHandler,
    reset: resetCvv,
  } = useInput(isPrice);

  const {
    value: expDateValue,
    isValid: expDateIsValid,
    hasError: expDateHasError,
    valueChangeHandler: expDateChangeHandler,
    inputBlurHandler: expDateBlurHandler,
    reset: resetExpDate,
  } = useInput(isNotEmpty);

  let navigate = useNavigate();

  let formIsValid = false;

  if (
    addressIsValid &&
    zipCodeIsValid &&
    cardIsValid &&
    cvvIsValid &&
    expDateIsValid
  ) {
    formIsValid = true;
  }

  const purchaseCourseHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    props.onPurchaseCourse({
      student: loggedUser.name,
      course: selectedCourse.id,
    });

    resetAddress();
    resetZipCode();
    resetCard();
    resetCvv();
    resetExpDate();
  };

  const backHandler = () => {
    navigate('/categories');
  };

  const addressClasses = addressHasError ? classes.invalid : classes;
  const zipCodeClasses = zipCodeHasError ? classes.invalid : classes;
  const cardClasses = cardHasError ? classes.invalid : classes;
  const cvvClasses = cvvHasError ? classes.invalid : classes;
  const expDateClasses = expDateHasError ? classes.invalid : classes;

  return (
    <Card className={classes.input}>
      <h2>Checkout</h2>
      <form onSubmit={purchaseCourseHandler}>
        <label htmlFor="address">Address</label>
        <input
          className={addressClasses}
          id="address"
          type="text"
          value={addressValue}
          onChange={addressChangeHandler}
          onBlur={addressBlurHandler}
        />
        <label htmlFor="zipCode">Zip Code</label>
        <input
          className={zipCodeClasses}
          id="zipCode"
          type="text"
          value={zipCodeValue}
          onChange={zipCodeChangeHandler}
          onBlur={zipCodeBlurHandler}
        />
        <label htmlFor="cardNumber">Card Number</label>
        <input
          className={cardClasses}
          id="cardNumber"
          type="text"
          value={cardValue}
          onChange={cardChangeHandler}
          onBlur={cardBlurHandler}
        />
        <label htmlFor="cvv">CVV</label>
        <input
          className={cvvClasses}
          id="cvv"
          type="text"
          value={cvvValue}
          onChange={cvvChangeHandler}
          onBlur={cvvBlurHandler}
        />
        <label htmlFor="expirationDate">Expiration Date</label>
        <input
          className={expDateClasses}
          id="expirationDate"
          type="date"
          value={expDateValue}
          onChange={expDateChangeHandler}
          onBlur={expDateBlurHandler}
        />
      </form>
      <h3>Summary</h3>
      <p>Total: ${parseFloat(selectedCourse.price).toFixed(2)}</p>
      <Button
        disabled={!formIsValid}
        type="submit"
        onClick={purchaseCourseHandler}
      >
        Complete Checkout
      </Button>
      <button type="button" className={classes.text} onClick={backHandler}>
        Cancel
      </button>
    </Card>
  );
};

export default Checkout;
