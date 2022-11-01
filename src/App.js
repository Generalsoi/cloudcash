import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.js";
import { Dashboard } from "./routes/dashboard.jsx";
import { Login } from "./routes/login.jsx";
import { ProtectedRoutes } from "./routes/protectedRoutes.jsx";
import { Signup } from "./routes/signup";

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
