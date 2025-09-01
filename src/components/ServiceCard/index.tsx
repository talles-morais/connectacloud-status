import React from "react";
import type { Service } from "../../types/Service";
import StatusBadge from "../StatusBadge";

interface ServiceCardProps {
  service: Service;
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="border border-border shadow-sm rounded-lg col-span-1 px-5 py-4 max-w-[300px] md:max-w-full hover:scale-105 transition-all bg-card">
      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-bold text-foreground">{service.name}</h1>
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
      </div>
    </div>
  );
}

export default React.memo(ServiceCard);
