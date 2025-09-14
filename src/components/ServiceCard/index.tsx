import React from "react";
import type { Service } from "../../types/Service";
import StatusBadge from "../StatusBadge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ServiceCardProps {
  service: Service;
  simulateError?: boolean;
}

function ServiceCard({ service, simulateError = false }: ServiceCardProps) {
  if (simulateError) {
    throw new Error(`Erro simulado no card do serviço: ${service.name}`);
  }

  return (
    <Card className="border border-border shadow-sm rounded-lg col-span-1 max-w-[300px] md:max-w-full hover:scale-105 transition-all bg-card cursor-pointer">
      <CardHeader>
        <CardTitle className="text-lg font-bold text-foreground">
          {service.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="flex justify-between">
          {/* service status */}
          <div className="flex flex-col gap-2">
            <span className="text-foreground/70">Status:</span>
            <StatusBadge status={service.status} />
          </div>

          {/* service latency */}
          <div className="flex flex-col gap-2">
            <span className="text-foreground/70">Latency:</span>
            <span className="font-bold text-foreground">
              {service.latency} ms
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        {/* last checked */}
        <div className="self-end">
          <span className="text-sm font-light text-foreground/60">
            Atualizado em:{" "}
            {new Date(service.lastChecked).toLocaleDateString("pt-br", {
              hour: "2-digit",
              minute: "numeric",
              day: "2-digit",
              month: "short",
            })}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}

export default React.memo(ServiceCard);
