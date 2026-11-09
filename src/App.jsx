import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Whatsapp from "./components/Whatsapp/Whatsapp";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import AppRoutes from "./AppRoutes";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Header />

      <AppRoutes />

      <Footer />

      <Whatsapp />
    </>
  );
}