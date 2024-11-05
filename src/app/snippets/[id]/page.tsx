import { db } from "@/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import * as actions from "@/app/actions/index";

interface SnippetShowPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function SnippetPage(props: SnippetShowPageProps) {
  const { id } = await props.params;
  //Emulate loading
  await new Promise((r) => setTimeout(r, 1000));

  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(id) },
  });

  if (!snippet) {
    return notFound();
  }

  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);

  return (
    <div>
      <div className="flex p-4 justify-between items-center">
        <h1 className="text-xl font-bold">Title: {snippet.title}</h1>
        <div className="flex gap-2">
          <Link className="p-2 border rounded" href={`/snippets/${id}/edit`}>Edit</Link>
          <form action={deleteSnippetAction}>
          <button className="p-2 border rounded">Delete</button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}
