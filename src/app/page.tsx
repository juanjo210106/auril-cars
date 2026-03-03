import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import WheelsSection from "@/components/WheelsSection";
import Blog from "@/components/Blog";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Team />
      <WheelsSection />
      <Blog />
      <Products />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
