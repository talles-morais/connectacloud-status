import type { ServiceStatus } from "../../types/Service";

interface StatusBadgeProps {
  status: ServiceStatus;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  let backgroundStyle: string;
  switch (status) {
    case "operational":
      backgroundStyle = "bg-operational px-2 py-1 rounded-md w-fit";
      break;
    case "degraded":
      backgroundStyle = "bg-degraded px-2 py-1 rounded-md w-fit";
      break;
    case "outage":
      backgroundStyle = "bg-outage px-2 py-1 rounded-md w-fit";
      break;
    default:
      backgroundStyle = "bg-gray-500 px-2 py-1 rounded-md w-fit";
  }

  return (
    <div className={backgroundStyle}>
      <span className={`text-sm text-white font-bold`}>{status}</span>
    </div>
  );
}
