import { prisma } from '@/lib/prisma'


export default async function TestPrismaList() {
    const feed = await prisma.article.findMany({
      where: { published: false },
    });

    return (
      <ol className="text-yellow font-bold">
        { feed.map(f => <li key={f.id}>{f.title}</li>)}
      </ol>
    )
  }
