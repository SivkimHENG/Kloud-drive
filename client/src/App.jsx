import SignUp from "./page/SignUp.jsx";
import Login from "./page/Login.jsx";
import DashBoard from "./page/DashBoard.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />;
      <Route path="/login" element={<Login />} />;
      <Route path="/dashboard" element={<DashBoard />} />;
    </Routes>
  );
}

export default App;
