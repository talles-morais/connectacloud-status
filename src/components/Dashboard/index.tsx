import { Search } from "lucide-react";
import { mockServices } from "../../data/mock-services";
import ServiceCard from "../ServiceCard";

export default function Dashboard() {
  return (
    <div className="container mx-auto pt-10 space-y-10">
      <div className="flex px-3 py-2 gap-2 border border-zinc-400 rounded-lg mx-4">
        <Search />
        <input
          type="text"
          placeholder="Pesquise pelo serviço desejado"
          className="outline-none flex-1"
        />
      </div>

      {/* service cards */}
      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center items-center">
        {mockServices.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </section>
    </div>
  );
}
