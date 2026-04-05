import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import OrderReminders from "@/components/OrderReminders";
import OrderForm from "@/components/OrderForm";
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
      <BottomBanner />
      <Footer />
    </main>
  );
}
