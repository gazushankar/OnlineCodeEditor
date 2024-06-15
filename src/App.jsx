import { CodeEditor } from "./components/CodeEditor";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { Html } from "./components/Html";
import { Css } from "./components/Css";
import { JavaScript } from "./components/JavaScript";
import { Console } from "./components/Console";
import { Output } from "./components/Output";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CodeEditor />} />
        <Route path="/Html" element={<Html />} />
        <Route path="/CSS" element={<Css />} />
        <Route path="/JavaScript" element={<JavaScript />} />
        <Route path="/Console" element={<Console />} />
        <Route path="/Output" element={<Output />} />
      </Routes>
    </>
  );
}

export default App;
