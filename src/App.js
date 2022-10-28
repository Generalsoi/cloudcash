import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.js";
import { Login } from "./routes/login.jsx";
import { Signup } from "./routes/signup";

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
