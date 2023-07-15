import "./App.css";
import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SignInSide from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`App App-${theme}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignInSide />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
