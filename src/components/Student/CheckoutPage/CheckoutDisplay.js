import Footer from '../../Common/Footer';
import HeaderStudent from '../HeaderStudent';
import Checkout from './Checkout';
import { getFirestore, setDoc, doc, collection } from 'firebase/firestore';

const db = getFirestore();

const CheckoutDisplay = () => {
  const purchaseCourseHandler = async (purchase) => {
    const coursesRef = doc(collection(db, 'userCourse'));
    await setDoc(coursesRef, purchase);
  };

  return (
    <>
      <HeaderStudent />
      <Checkout onPurchaseCourse={purchaseCourseHandler} />
      <Footer />
    </>
  );
};
export default CheckoutDisplay;
