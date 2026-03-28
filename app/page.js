import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import OrderSection from "@/components/OrderSection";
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
      <Footer />
    </main>
  );
}
