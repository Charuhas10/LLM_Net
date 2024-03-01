import ModelCard from "./ModelCard";

export default function ModelCardList({ models }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {models.map((model) => (
        <ModelCard
          key={model.id}
          id={model.id}
          title={model.title}
          views={model.views}
          likes={model.likes}
          url={model.url}
        />
      ))}
    </div>
  );
}
