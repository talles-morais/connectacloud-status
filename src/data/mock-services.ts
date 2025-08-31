import type { Service } from "../types/Service";

export const mockServices: Service[] = [
  {
    id: "1",
    name: "API Gateway",
    status: "operational",
    latency: 120,
    lastChecked: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Authentication Service",
    status: "operational",
    latency: 80,
    lastChecked: new Date().toISOString(),
  },
  {
    id: "3",
    name: "Database Cluster",
    status: "degraded",
    latency: 450,
    lastChecked: new Date().toISOString(),
  },
  {
    id: "4",
    name: "CI/CD Pipeline",
    status: "outage",
    latency: 0,
    lastChecked: new Date().toISOString(),
  },
  {
    id: "5",
    name: "Customer Support Portal",
    status: "operational",
    latency: 210,
    lastChecked: new Date().toISOString(),
  },
];
