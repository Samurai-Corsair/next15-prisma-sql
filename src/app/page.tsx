import {db} from "@/db";



export default async function Home() {
  const snippets = await db.snippet.findMany();


  return <div>
    Home Page
    {snippets.map((snippet) => (<div key={snippet.id}>title: {snippet.title}</div>))}
  </div>;
}
