import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import SiteLayout from './layouts/SiteLayout';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/terms_of_service" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  );
}
