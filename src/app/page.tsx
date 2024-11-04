import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = () => {
    return snippets.map((snippet) => (
      <Link
        href={`/snippets/${snippet.id}`}
        className="flex justify-between items-center p-2 border rounded"
        key={snippet.id}
      >
        <div>title: {snippet.title}</div>
        <div>View</div>
      </Link>
    ));
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex p-2 justify-between items-center">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link className="border p-2 rounded" href={"/snippets/new"}>
          New
        </Link>
      </div>
      {renderedSnippets()}
    </div>
  );
}
