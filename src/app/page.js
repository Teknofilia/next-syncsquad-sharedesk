import { Header } from "@/components/sharedUI/header";
import { apiUrl } from "@/config/apiUrl";

async function getData(query) {
  if (!query) {
    const res = await fetch(`${apiUrl}/products`);
    const data = await res.json();
    return data;
  }

  const res = await fetch(`${apiUrl}/products?q=${query}`);
  const data = await res.json();
  return data;
}
export default function Home() {
  return (
    <main className="max-w-5xl m-auto py-8 space-y-20">
      <Header />
    </main>
  );
}
