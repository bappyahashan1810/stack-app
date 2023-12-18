import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./Components/Pages/SignIn";
import Singup from "./Components/Pages/Singup";
import UserDashboard from "./Components/Pages/UserDashboard/UserDashboard";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserDashboard />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Singup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
