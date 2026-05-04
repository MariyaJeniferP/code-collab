import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Editor from "./pages/Editor";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Live from "./pages/Live";


function App() {

  return (
    <>
      <Navbar />
    
      <Routes>

         <Route path="/" element={<Home />} />

        <Route path="/signin" element={<Signin />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/editor" element={<Editor />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/about" element={<About />} />
 
        <Route path="/contact" element={<Contact />} />

        <Route path="/live" element={<Live />} />

      </Routes>

      <Footer />

      </>
  );

}

export default App;