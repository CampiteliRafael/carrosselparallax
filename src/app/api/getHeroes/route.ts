import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";
import type { Hero } from "@/app/interfaces/Hero";

export async function GET(request: Request) {
  try {
    const jsonDirectory = path.join(process.cwd(), "src", "data");
    const fileContents = await fs.readFile(
      path.join(jsonDirectory, "heroes.json"),
      "utf8"
    );
    const jsonData: Hero[] = JSON.parse(fileContents);

    return NextResponse.json(jsonData, { status: 200 });
  } catch (error: any) {
    console.error("Erro ao ler o arquivo JSON:", error);
    return NextResponse.json(
      {
        message: "Erro ao buscar os dados dos heróis.",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
