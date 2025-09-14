import type { Service } from "@/types/Service";
import { create } from "zustand";
import { mockServices } from "@/data/mock-services";

type ServiceState = {
  services: {
    byId: Record<string, Service>;
    allIds: Service[];
  };
  isLoading: boolean;
  error: string | null;
  loadServices: (services: Service[]) => void;
  initializeServices: () => void;
  addService: (service: Service) => void;
  updateService: (service: Service) => void;
  removeService: (id: string) => void;
};

const useServiceStore = create<ServiceState>(set => ({
  services: { byId: {}, allIds: [] },
  isLoading: false,
  error: null,
  loadServices: services =>
    set(() => ({
      services: {
        byId: Object.fromEntries(
          services.map(service => [service.id, service])
        ),
        allIds: services,
      },
      isLoading: false,
      error: null,
    })),
  initializeServices: () => {
    set(() => ({ isLoading: true, error: null }));

    // Simula um delay de carregamento como no hook original
    setTimeout(() => {
      set(() => ({
        services: {
          byId: Object.fromEntries(
            mockServices.map(service => [service.id, service])
          ),
          allIds: mockServices,
        },
        isLoading: false,
        error: null,
      }));
    }, 1500);
  },
  addService: service =>
    set(state => ({
      services: {
        byId: { ...state.services.byId, [service.id]: service },
        allIds: [...state.services.allIds, service],
      },
    })),
  updateService: service =>
    set(state => ({
      services: {
        ...state.services,
        byId: { ...state.services.byId, [service.id]: service },
      },
    })),
  removeService: id =>
    set(state => {
      const { [id]: _, ...byId } = state.services.byId;
      return {
        services: {
          byId,
          allIds: state.services.allIds.filter(service => service.id !== id),
        },
      };
    }),
}));

export default useServiceStore;
