import { Routes, Route } from "react-router-dom";
import { Login } from "./routes/login.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
