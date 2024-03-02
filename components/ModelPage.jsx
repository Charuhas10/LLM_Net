import models from "@/models";
import React from "react";

export default function ModelPage({ id }) {
  console.log("id",id);
  const model = models.find((model) => model.id === id);
  console.log("model",model);
  return <div>ModelPage: {id}</div>;
}
