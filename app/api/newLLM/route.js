import NewModel from "@/app/new/page";
import { connectMongoDB } from "@/lib/mongodb";
import Model from "@/schemas/models";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { type, title, tags, description, useCases, code } = await req.json();
    console.log(type, title, tags, description, useCases, code);
    console.log(tags);
    const model = {
      type,
      title,
      tags,
      description,
      useCases,
      code,
    };

    const newModel = await Model.create(model);

    return NextResponse.json(
      { message: "Model added successfully", id: newModel._id },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.error(error);
  }
}
