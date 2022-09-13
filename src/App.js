import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import CreateAccountDisplay from './components/CreateAccountPage/CreateAccountDisplay';
import ForgotPasswordDisplay from './components/ForgotPasswordPage/ForgotPasswordDisplay';
import LoginDisplay from './components/LoginPage/LoginDisplay';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginDisplay />} />
        <Route path="/createAccount" element={<CreateAccountDisplay />} />
        <Route path="/forgotPassword" element={<ForgotPasswordDisplay />} />
      </Routes>
    </div>
  );
}

export default App;
