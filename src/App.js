import { Route, Routes } from 'react-router-dom';

import './App.css';
import CreateAccountDisplay from './components/CreateAccountPage/CreateAccountDisplay';
import ForgotPasswordDisplay from './components/ForgotPasswordPage/ForgotPasswordDisplay';
import LoginDisplay from './components/LoginPage/LoginDisplay';
import AddCourseDisplay from './components/Professor/AddCourseDisplay';
import MyCoursesDisplay from './components/Professor/MyCoursesDisplay';
import MyCourses from './components/Student/MyCourses';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginDisplay />} />
        <Route path="/createAccount" element={<CreateAccountDisplay />} />
        <Route path="/forgotPassword" element={<ForgotPasswordDisplay />} />
        <Route path="/addCourse" element={<AddCourseDisplay />} />
        <Route path="/professorCourses" element={<MyCoursesDisplay />} />
        <Route path="/studentCourses" element={<MyCourses />} />
      </Routes>
    </div>
  );
}

export default App;
