import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <div className="flex-grow"></div>{" "}
      {/* This div will take up any available space */}
      <Footer />
    </div>
  );
}
