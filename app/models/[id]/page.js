import ModelPage from "@/components/ModelPage";
import Navbar from "@/components/Navbar";

export default function ModelsPage({ params }) {
  const { id } = params;
  return (
    <div>
      <ModelPage id={id} />
    </div>
  );
}
 