import ModelPage from "@/components/ModelPage";
import Navbar from "@/components/Navbar";

export default function ModelsPage({ params }) {
  const { id } = params;
  return (
    <div>
      <Navbar />
      <ModelPage id={id} />
    </div>
  );
}
