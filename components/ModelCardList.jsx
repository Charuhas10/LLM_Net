import ModelCard from "./ModelCard";

export default function ModelCardList({ models }) {
  console.log("LIST models", models);
  console.log("list id::", models.id);
  console.log("LIST id", models._id);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {models.map((model) => (
        <ModelCard
          key={model._id}
          id={model._id}
          type={model.type}
          downloads={model.downloads}
          likes={model.likes}
          title={model.title}
          description={model.description}
          icon={model.icon}
        />
      ))}
    </div>
  );
}
