import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import OrderReminders from "@/components/OrderReminders";
import OrderForm from "@/components/OrderForm";
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
      <Products />
      <OrderReminders />
      <OrderForm />
      <Menu />
      <About />
      <Testimonials />
      <OrderSection />
      <BottomBanner />
      <Footer />
    </main>
  );
}
