import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homee from './routes/Homee';
import About from './routes/About';
import Contact from './routes/Contact';
import Projeect from './routes/Projeect';

function App() {
  return (
    <BrowserRouter basename="/Portfolio_Website">
      <Routes>
        <Route path="/" element={<Homee />} />
        <Route path="/project" element={<Projeect />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;




// import Homee from "./routes/Homee";
// import About from "./routes/About";
// import Contact from "./routes/Contact";
// import Projeect from "./routes/Projeect";

// import { Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <>
//     {/* <BrowserRouter basename="/Portfolio_Website"> */}
//       <Routes>
//         <Route path="/" element={<Homee />} />
//         <Route path="/project" element={<Projeect />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//       {/* </BrowserRouter> */}
//     </>
//   );
// }

// export default App;
