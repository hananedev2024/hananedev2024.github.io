
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Shop from './components/Shop';
import NoPage from './NoPage';

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
