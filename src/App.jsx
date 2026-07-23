// import Home from "./pages/Home"
// const App = () => {
//   return (
//    <>
//    <Home />
//    </>
   
    
//   )
// }

// export default App

import { Routes, Route } from "react-router-dom";

import Navbar from "./assets/components/sections/Navbar";
import Footer from "./assets/components/sections/Footer";

import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import Pricing from "./pages/Pricing";
import B2B from "./pages/B2B";
import FreeDesign from "./pages/FreeDesign";
import Contactus from "./pages/Contactus";
import DesignDetails from "./pages/DesignDetails";
import BlogListPage from "./pages/BlogListPage";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/b2b" element={<B2B />} />
        <Route path="/freedesign" element={<FreeDesign />} />
         <Route path="/design/:id" element={<DesignDetails />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/blogsList" element={<BlogListPage />} />
         <Route
    path="/blogs/:id"
    element={<BlogPage />}
  />
      </Routes>

      <Footer />
    </>
  );
}

export default App;