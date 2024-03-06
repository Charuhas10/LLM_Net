import { connectMongoDB } from "@/lib/mongodb";
import Model from "@/schemas/models";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectMongoDB();
    const LLMmodels = await Model.find({});
    return NextResponse.json(LLMmodels, {});
  } catch (e) {
    console.error(e);
    return NextResponse.error(e);
  }
}

export const dynamic = "force-dynamic";
