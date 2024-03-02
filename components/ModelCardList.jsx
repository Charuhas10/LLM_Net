import ModelCard from "./ModelCard";

export default function ModelCardList({ models }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {models.map((model) => (
        <ModelCard
          key={model.id}
          id={model.id}
          type={model.type}
          downloads={model.downloads}
          likes={model.likes}
          title={model.title}
        />
      ))}
    </div>
  );
}
