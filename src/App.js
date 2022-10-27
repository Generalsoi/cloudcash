import { Routes, Route } from "react-router-dom";
import { Login } from "./routes/login.jsx";
import { Signup } from "./routes/signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
