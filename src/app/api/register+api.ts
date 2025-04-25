import { z } from "zod";

export const userLoginSchema = z.object({
  username: z.string(),
  password: z.string().min(8),
});

export async function POST(request: Request) {
  const body = await request.json();

  return Response.json({ hello: "world" });
}