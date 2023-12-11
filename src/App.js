import Homee from "./routes/Homee";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Projeect from "./routes/Projeect";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route path="/" element={<Homee />} />
        <Route path="/project" element={<Projeect />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </BrowserRouter>
    </>
  );
}

export default App;
