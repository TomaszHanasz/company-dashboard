import "./App.css";
import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SignInSide from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import TableSite from "./pages/table/TableSite";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`App App-${theme}`}>
        <AuthContextProvider>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/table"
              element={
                <ProtectedRoute>
                  {" "}
                  <TableSite />
                </ProtectedRoute>
              }
            />
            <Route path="/signin" element={<SignInSide />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </AuthContextProvider>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
