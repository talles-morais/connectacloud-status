import type { Service } from "../../types/Service";
import StatusBadge from "../StatusBadge";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogDescription,
} from "../ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

interface ModalProps {
  trigger: React.ReactNode;
  service: Service;
}

export default function Modal({ trigger, service }: ModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            {service.name}
          </DialogTitle>
          <DialogDescription className="text-foreground/70 text-sm mt-1">
            Detalhes do serviço
          </DialogDescription>
        </DialogHeader>

        {/* Conteúdo do modal */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex justify-between items-center py-2 bg-muted rounded-lg">
              <span className="text-foreground/70 font-medium">Status:</span>
              <StatusBadge status={service.status} />
            </div>

            <div className="flex justify-between items-center py-2 bg-muted rounded-lg">
              <span className="text-foreground/70 font-medium">Latência:</span>
              <span className="font-bold text-foreground">
                {service.latency} ms
              </span>
            </div>

            <div className="flex justify-between items-center py-2 bg-muted rounded-lg">
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

          <div className="bg-muted rounded-lg">
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
      </DialogContent>
    </Dialog>
  );
}
