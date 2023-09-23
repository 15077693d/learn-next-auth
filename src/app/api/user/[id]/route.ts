import prisma from "@/lib/prisma";

export const GET = async (
  request: Request,
  { params }: { params: { id: number } }
) => {
  const userPosts = await prisma.post.findMany({
    where: { authorId: Number(params.id) },
    include: {
      author: {
        select: {
          email: true,
          name: true,
        },
      },
    },
  });
  return new Response(JSON.stringify(userPosts));
};
