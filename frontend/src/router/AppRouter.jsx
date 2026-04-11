import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Listing from "../pages/Listing";
import ArtisanDetail from "../pages/ArtisanDetail";
import NotFound from "../pages/NotFound";

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main-content container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artisans" element={<Listing />} />
          <Route path="/artisans/:id" element={<ArtisanDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
