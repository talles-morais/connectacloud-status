import { Search } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="container mx-auto pt-10">
      <div className="flex px-3 py-2 gap-2 border border-zinc-400 rounded-lg mx-4">
        <Search />
        <input type="text" placeholder="Pesquise pelo serviço desejado" className="outline-none flex-1" />
      </div>

      {/* service cards */}
      <section>

      </section>
    </div>
  );
}
