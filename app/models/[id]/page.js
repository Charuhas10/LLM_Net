import Footer from "@/components/Footer";
import ModelPage from "@/components/ModelPage";

export default function ModelsPage({ params }) {
  const { id } = params;

  return (
    <div className="flex flex-col min-h-screen">
      <ModelPage id={id} />
      <Footer />
    </div>
  );
}
