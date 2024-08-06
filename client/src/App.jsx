import SignUp from "./page/SignUp.jsx";
import Login from "./page/Login.jsx";
import DashBoard from "./page/DashBoard.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
function App() {
  return (
    <>
      <SignUp />
    </>
  );
}

export default App;
