import React, { useState } from "react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { RoutesApp } from "./components/RoutesApp";

function App() {
  const [darkTheme, setDarkTheme] = useState("dark");
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <RoutesApp />
        <Footer />
      </div>
    </div>
  );
}

export default App;
