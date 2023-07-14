import "./App.css";
import { createContext, useState } from "react";
import Home from "./pages/home/Home";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App">
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
