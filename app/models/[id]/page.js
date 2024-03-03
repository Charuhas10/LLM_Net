import ModelPage from "@/components/ModelPage";

export default function ModelsPage({ params }) {
  const { id } = params;
  return (
    <div>
      <ModelPage id={id} />
    </div>
  );
}
 