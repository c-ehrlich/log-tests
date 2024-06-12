import { CreatePost } from "~/app/_components/create-post";
import { ErrorButton } from "./_components/error-button";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <CrudShowcase />
    </main>
  );
}

async function CrudShowcase() {
  return (
    <div className="w-full max-w-xs">
      <CreatePost />
      <ErrorButton />
    </div>
  );
}
