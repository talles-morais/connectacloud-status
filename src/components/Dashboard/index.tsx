import { Search } from "lucide-react";
import ServiceCard from "../ServiceCard";
import useServiceStatus from "../../hooks/useServiceStatus";
import ServiceCardSkeleton from "../ServiceCard/ServiceCardSkeleton";
import { useState } from "react";
import Modal from "../Modal";
import type { Service } from "../../types/Service";

export default function Dashboard() {
  const { services, isLoading } = useServiceStatus();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="container mx-auto pt-10 space-y-10 px-4">
      <div className="flex px-4 py-3 gap-3 border border-border rounded-lg bg-card shadow-sm">
        <Search className="w-5 h-5 text-foreground/60" />
        <input
          type="text"
          placeholder="Pesquise pelo serviço desejado"
          className="outline-none flex-1 bg-transparent text-foreground placeholder:text-foreground/60"
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      {/* service cards */}
      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center items-center">
        {isLoading
          ? // Exibe skeletons enquanto carrega
            Array.from({ length: 6 }).map((_, index) => (
              <ServiceCardSkeleton key={index} />
            ))
          : // Exibe os serviços quando carregados
            (() => {
              const filteredServices = services.filter(service =>
                service.name.toLowerCase().includes(searchTerm.toLowerCase())
              );

              return filteredServices.length > 0 ? (
                filteredServices.map(service => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    onClick={() => handleServiceClick(service)}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <span className="text-gray-500">
                    Nenhum serviço encontrado
                  </span>
                </div>
              );
            })()}
      </section>

      {isModalOpen && selectedService && (
        <Modal
          isOpen={isModalOpen}
          setIsOpen={handleCloseModal}
          service={selectedService}
        />
      )}
    </div>
  );
}
