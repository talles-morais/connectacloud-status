import { Search } from "lucide-react";
import ServiceCard from "../ServiceCard";
import useServiceStatus from "../../hooks/useServiceStatus";
import ServiceCardSkeleton from "../ServiceCard/ServiceCardSkeleton";

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
      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center items-center">
        {isLoading ? (
          // Exibe skeletons enquanto carrega
          Array.from({ length: 6 }).map((_, index) => (
            <ServiceCardSkeleton key={index} />
          ))
        ) : (
          // Exibe os serviços quando carregados
          services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))
        )}
      </section>
    </div>
  );
}
