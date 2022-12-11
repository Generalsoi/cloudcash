import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.js";
import { Dashboard } from "./routes/dashboard.jsx";
import { Login } from "./routes/login.jsx";
import { ProtectedRoutes } from "./utils/protectedRoutes.jsx";
import { Signup } from "./routes/signup";

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
