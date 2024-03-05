import ModelCard from "./ModelCard";

export default function ModelCardList({ models }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 box-border mx-4">
      {models.map((model) => (
        <ModelCard
          key={model._id}
          id={model._id}
          type={model.type}
          downloads={model.downloads}
          likes={model.likes}
          title={model.title}
          featured={model.featured}
          description={model.description}
          icon={model.icon}
        />
      ))}
    </div>
  );
}
