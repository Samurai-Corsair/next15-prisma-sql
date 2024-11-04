import {db} from "@/db";
import {notFound} from "next/navigation";
import SnippetEditForm from "@/components/snippetEditForm";

interface SnippetEditPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function SnippetEditPage (props: SnippetEditPageProps) {
    const { id } = await props.params;

    const snippet = await db.snippet.findFirst({
        where: { id: parseInt(id) },
    });

    if (!snippet) {
        return notFound();
    }

    return (
    <div>Editing snippet with title: {snippet.title}
    <SnippetEditForm snippet={snippet} />
    </div>
    )
}