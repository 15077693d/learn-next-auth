import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession();
  if (session) {
    return NextResponse.json({
      content: "This is protected content.",
    });
  } else {
    return NextResponse.json({
      context: "Please log in.",
    });
  }
}
