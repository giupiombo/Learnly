import { Route, Routes } from 'react-router-dom';

import './App.css';
import CreateAccountDisplay from './components/CreateAccountPage/CreateAccountDisplay';
import ForgotPasswordDisplay from './components/ForgotPasswordPage/ForgotPasswordDisplay';
import LoginDisplay from './components/LoginPage/LoginDisplay';
import AddCourseDisplay from './components/Professor/AddCourseDisplay';
import ProfessorCoursesDisplay from './components/Professor/ProfessorCoursesDisplay';
import CategoriesDisplay from './components/Student/CategoriesDisplay';
import StudentCoursesDisplay from './components/Student/StudentCoursesDisplay.js';
import { UserContextProvider } from './context/user-context';

function App() {
  return (
    <div>
      <UserContextProvider>
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
      </UserContextProvider>
    </div>
  );
}

export default App;
