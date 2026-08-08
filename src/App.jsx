import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/sections/Navbar";
import Footer from "./assets/components/sections/Footer";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import B2B from "./pages/B2BPage";
import FreeDesign from "./pages/FreeDesign";
import Contactus from "./pages/Contactus";
import DesignDetails from "./pages/DesignDetails";
import BlogListPage from "./pages/BlogListPage";
import BlogPage from "./pages/BlogPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PricingPage from "./pages/PricingPage";
import FAQPage from "./pages/FAQPage";
import SizeGuidePage from "./pages/SizeGuidePage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/b2b" element={<B2B />} />
        <Route path="/freedesign" element={<FreeDesign />} />
        <Route path="/design/:id" element={<DesignDetails />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/blogsList" element={<BlogListPage />} />
        <Route path="/blogs/:id" element={<BlogPage />}  />
        <Route  path="/login"  element={<LoginPage />} /> 
        <Route path="/register"  element={<RegisterPage />}  /> 
        <Route path="/pricing"  element={<PricingPage />}  /> 
        <Route path="/faqs"  element={<FAQPage />}  /> 
        <Route path="/sizes"  element={<SizeGuidePage />}  /> 
      </Routes>
 <Footer />
    </>
  );
}

export default App;