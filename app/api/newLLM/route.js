import { connectMongoDB } from "@/lib/mongodb";
import Model from "@/schemas/models";
import { NextResponse } from "next/server";
import { validationResult, body } from "express-validator";
import sanitize from "mongo-sanitize";

const validateModel = [
  body("type").trim().escape(),
  body("title").trim().escape(),
  body("tags").isArray().withMessage("Tags must be an array"),
  body("description").trim().escape(),
  body("useCases").trim().escape(),
  body("code").trim().escape(),
];

export async function POST(req) {
  try {
    await connectMongoDB();

    const cleanReq = sanitize(await req.json());

    // Validate input
    await validateModel.forEach((validation) => validation.run(req));

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return NextResponse.json({ errors: errors.array() }, { status: 400 });
    }

    const model = {
      type: cleanReq.type,
      title: cleanReq.title,
      tags: cleanReq.tags,
      description: cleanReq.description,
      useCases: cleanReq.useCases,
      code: cleanReq.code,
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
