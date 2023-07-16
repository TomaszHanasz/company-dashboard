import "./App.css";
import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SignInSide from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import { AuthContextProvider } from "./context/AuthContext";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`App App-${theme}`}>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignInSide />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </AuthContextProvider>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
