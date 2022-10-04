import { Route, Routes } from 'react-router-dom';

import './App.css';
import CreateAccountDisplay from './components/CreateAccountPage/CreateAccountDisplay';
import ForgotPasswordDisplay from './components/ForgotPasswordPage/ForgotPasswordDisplay';
import LoginDisplay from './components/LoginPage/LoginDisplay';
import AddCourseDisplay from './components/Professor/AddCoursePage/AddCourseDisplay';
import ProfessorCoursesDisplay from './components/Professor/ProfessorCoursesDisplay';
import CategoriesDisplay from './components/Student/CategoriesPage/CategoriesDisplay';
import StudentCoursesDisplay from './components/Student/StudentCoursesDisplay.js';
import { CourseContextProvider } from './context/course-context';
import { UserContextProvider } from './context/user-context';

function App() {
  return (
    <div>
      <UserContextProvider>
        <CourseContextProvider>
          <Routes>
            <Route path="/" element={<LoginDisplay />} />
            <Route path="/createAccount" element={<CreateAccountDisplay />} />
            <Route path="/forgotPassword" element={<ForgotPasswordDisplay />} />
            <Route path="/addCourse" element={<AddCourseDisplay />} />
            <Route
              path="/professorCourses"
              element={<ProfessorCoursesDisplay />}
            />
            <Route path="/studentCourses" element={<StudentCoursesDisplay />} />
            <Route path="/categories" element={<CategoriesDisplay />} />
          </Routes>
        </CourseContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
