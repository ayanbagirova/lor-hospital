import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./layout/Footer";
import DoctorsDetail from "./pages/DoctorDetail";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/doctors/:id" element={<DoctorsDetail/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;