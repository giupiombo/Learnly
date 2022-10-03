import { Route, Routes } from 'react-router-dom';

import './App.css';
import CreateAccountDisplay from './components/CreateAccountPage/CreateAccountDisplay';
import ForgotPasswordDisplay from './components/ForgotPasswordPage/ForgotPasswordDisplay';
import LoginDisplay from './components/LoginPage/LoginDisplay';
import AddCourseDisplay from './components/Professor/AddCourseDisplay';
import MyCoursesDisplay from './components/Professor/ProfessorCoursesDisplay';
import MyCourses from './components/Student/MyCourses';
import { UserContextProvider } from './user/user-context';

function App() {
  return (
    <div>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<LoginDisplay />} />
          <Route path="/createAccount" element={<CreateAccountDisplay />} />
          <Route path="/forgotPassword" element={<ForgotPasswordDisplay />} />
          <Route path="/addCourse" element={<AddCourseDisplay />} />
          <Route path="/professorCourses" element={<MyCoursesDisplay />} />
          <Route path="/studentCourses" element={<MyCourses />} />
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
