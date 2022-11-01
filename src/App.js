import { Route, Routes } from 'react-router-dom';

import './App.css';
import SelectedCourse from './components/Common/SelectedCourse';
import CreateAccountDisplay from './components/CreateAccountPage/CreateAccountDisplay';
import ForgotPasswordDisplay from './components/ForgotPasswordPage/ForgotPasswordDisplay';
import ResetPasswordDisplay from './components/ForgotPasswordPage/ResetPasswordDisplay';
import HomeDisplay from './components/HomePage/HomeDisplay';
import Initial from './components/InitialPage/Initial';
import LoginDisplay from './components/LoginPage/LoginDisplay';
import AddCourseDisplay from './components/Professor/AddCoursePage/AddCourseDisplay';
import EditCourseDisplay from './components/Professor/EditCoursePage/EditCourseDisplay';
import ProfessorCoursesDisplay from './components/Professor/ProfessorCoursesDisplay';
import CategoriesDisplay from './components/Student/CategoriesPage/CategoriesDisplay';
import Checkout from './components/Student/CheckoutPage/Checkout';
import StudentCoursesDisplay from './components/Student/StudentCoursesDisplay.js';
import { CourseContextProvider } from './context/course-context';
import { SelectedCourseContextProvider } from './context/selected-course-context';
import { UserContextProvider } from './context/user-context';

function App() {
  return (
    <div>
      <UserContextProvider>
        <CourseContextProvider>
          <SelectedCourseContextProvider>
            <Routes>
              <Route path="/" element={<Initial />} />
              <Route path="/login" element={<LoginDisplay />} />
              <Route path="/createAccount" element={<CreateAccountDisplay />} />
              <Route
                path="/forgotPassword"
                element={<ForgotPasswordDisplay />}
              />
              <Route path="/resetPassword" element={<ResetPasswordDisplay />} />
              <Route path="/home" element={<HomeDisplay />} />
              <Route path="/addCourse" element={<AddCourseDisplay />} />
              <Route
                path="/professorCourses"
                element={<ProfessorCoursesDisplay />}
              />
              <Route path="/selectedCourse" element={<SelectedCourse />} />
              <Route path="/editCourse" element={<EditCourseDisplay />} />
              <Route
                path="/studentCourses"
                element={<StudentCoursesDisplay />}
              />
              <Route path="/categories" element={<CategoriesDisplay />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </SelectedCourseContextProvider>
        </CourseContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
