import { Search } from "lucide-react";
import ServiceCard from "../ServiceCard";
import useServiceStatus from "../../hooks/useServiceStatus";

export default function Dashboard() {
  const { services, isLoading } = useServiceStatus()

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
      {!isLoading && services.length > 0 && (
        <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center items-center">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </section>
      )}

      {isLoading && (
        <div className="text-center py-8">
          <p>Carregando serviços...</p>
        </div>
      )}
    </div>
  );
}
