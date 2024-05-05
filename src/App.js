
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from 'Components/About';
import Contact from 'Components/Contact';
import Shop from 'Components/Shop';
import NoPage from 'NoPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Shop" element={<Shop />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      <div>hello</div>
    </>
  )
}

export default App
