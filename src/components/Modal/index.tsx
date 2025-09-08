import ReactDOM from "react-dom";
import { X } from "lucide-react";
import type { Service } from "../../types/Service";
import StatusBadge from "../StatusBadge";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  service: Service;
}

export default function Modal({ isOpen, setIsOpen, service }: ModalProps) {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpen();
    }
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 flex justify-center items-center bg-black/50 z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-card border border-border rounded-lg shadow-lg max-w-md w-full mx-4 p-6 relative">
        {/* Botão de fechar */}
        <button
          onClick={setIsOpen}
          className="absolute top-4 right-4 text-foreground/60 hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Conteúdo do modal */}
        <div className="space-y-6">
          <div className="pr-8">
            <h2 className="text-2xl font-bold text-foreground">
              {service.name}
            </h2>
            <p className="text-foreground/70 text-sm mt-1">
              Detalhes do serviço
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
              <span className="text-foreground/70 font-medium">Status:</span>
              <StatusBadge status={service.status} />
            </div>

            <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
              <span className="text-foreground/70 font-medium">Latência:</span>
              <span className="font-bold text-foreground">
                {service.latency} ms
              </span>
            </div>

            <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
              <span className="text-foreground/70 font-medium">
                Última verificação:
              </span>
              <span className="text-foreground text-sm">
                {new Date(service.lastChecked).toLocaleDateString("pt-BR", {
                  hour: "2-digit",
                  minute: "2-digit",
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold text-foreground mb-2">Informações:</h3>
            <p className="text-foreground/70 text-sm">
              {service.status === "operational" &&
                "O serviço está funcionando normalmente."}
              {service.status === "degraded" &&
                "O serviço está com desempenho reduzido."}
              {service.status === "outage" &&
                "O serviço está indisponível no momento."}
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
