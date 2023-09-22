import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Manage from "./Components/Manage";
import Track from "./Components/Track";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Manage />
              <Track />
              <Footer />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
