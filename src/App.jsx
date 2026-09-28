import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import ReviewPage from "./pages/ReviewPage";
import WhyChooseUs from "./pages/WhyChooseUs";
import SiteMap from "./pages/SiteMap";
import ScrollToTop from "./assets/components/layout/ScrollToTop";
import ScrollToHash from "./assets/components/layout/ScrollToHash";
import TermsPage from "./pages/TermsPage";
import RefundPage from "./pages/RefundPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import HelpPage from './pages/HelpPage'
import FileFormatPage from "./pages/FileFormatPage";
import ArtRequiredPage from "./pages/ArtRequiredPage";
import CapDigitizingPage from "./pages/CapDigitizingPage";
import JacketBackDigitizing  from "./pages/JacketBackDigitizing";
import LeftChestDigitizingService from "./pages/LeftChestDigitizingService";
import AppliqueDigitizingService from "./pages/AppliqueDigitizingService";
import ChenilleDigitizingService from "./pages/ChenilleDigitizingService";
import CustomLogoDesign from "./pages/CustomLogoDesign";
import EmbroideredPatchesServices from "./pages/EmbroideredPatchesServices";
import ShirtEmbroideryDigitizing from "./pages/ShirtEmbroideryDigitizing";
import ThreeDPuffDigitizingService from "./pages/ThreeDPuffDigitizingService";
import VectorArtServices from "./pages/VectorArtServices";
import CustomHatDigitizing from "./pages/CustomHatDigitizing";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToHash />
      <Navbar />

      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/b2b" element={<B2B />} />
        <Route path="/freedesign" element={<FreeDesign />} />
        <Route path="/design/:id" element={<DesignDetails />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/blogs-list" element={<BlogListPage />} />
        <Route path="/blogs/:id" element={<BlogPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/faqs" element={<FAQPage />} />
        <Route path="/sizes" element={<SizeGuidePage />} />
        <Route path="/reviews" element={<ReviewPage />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/terms-and-conditions" element={<TermsPage />} />
        <Route path="/refund-policy" element={<RefundPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/file-formats" element={<FileFormatPage />} />
          <Route path="/sitemap" element={<SiteMap />} />
          <Route path="/art-requirements" element={<ArtRequiredPage />} />
          <Route path="/services/cap-digitizing" element={<CapDigitizingPage />}/>
<Route path="/services/jacket-back-digitizing" element={<JacketBackDigitizing />}/>
<Route path="/services/left-chest-digitizing" element={<LeftChestDigitizingService />}/>
<Route path="/services/applique-embroidery-digitizing" element={<AppliqueDigitizingService />}/>
<Route path="/services/3d-puff-embroidery" element={<ThreeDPuffDigitizingService />}/>
<Route path="/services/embroidered-patches" element={<EmbroideredPatchesServices />}/>
<Route path="/services/logo-digitizing" element={<CustomLogoDesign />}/>
<Route  path="/services/custom-hat-embroidery" element={<CustomHatDigitizing />}/>
<Route  path="/services/chenille-digitizing" element={<ChenilleDigitizingService />}/>
<Route path="/services/shirt-embroidery-digitizing" element={<ShirtEmbroideryDigitizing />}/>    
  <Route path="/services/vector-art" element={<VectorArtServices />}/>     
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;