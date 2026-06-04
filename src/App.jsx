import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Collections from './pages/Collections';
import Artisans from './pages/Artisans';
import CraftProcess from './pages/CraftProcess';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-ivory text-walnut">
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/artisans" element={<Artisans />} />
        <Route path="/craft-process" element={<CraftProcess />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
