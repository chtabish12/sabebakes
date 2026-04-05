import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import OrderSection from "@/components/OrderSection";
import BottomBanner from "@/components/BottomBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Testimonials />
      <OrderSection />
      <BottomBanner />
      <Footer />
    </main>
  );
}
