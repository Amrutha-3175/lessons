import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import App1 from "./components/App1";
import App2 from "./components/App2";
import App3 from "./components/App3";
import App4 from "./components/App4";
import App5 from "./components/App5";
import App6 from "./components/App6";
import App7 from "./components/App7";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>React Lessons</h1>
        <Link to="/">App1</Link>-
        <Link to="/app2">App2</Link>
      </header>
      <hr />
      <main>
        <Routes>
          <Route index element={<App1/>}></Route>
          <Route path="/" element={<App1/>}></Route>
          <Route path="/app2" element={<App2/>}></Route>
          <Route path="/app3" element={<App3 />}></Route>
        <Route path="/app4" element={<App4 />}></Route>
         <Route path="/app5" element={<App5 />}></Route>
         <Route path="/app6" element={<App6 />}></Route>
          <Route path="/app7" element={<App7 />}></Route>
        </Routes>
      </main>
      <hr />
      <footer>Copyright. All rights reserved.</footer>
    </BrowserRouter>
  );
}
export default App;