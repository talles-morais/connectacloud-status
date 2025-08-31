import { useEffect, useState } from "react";
import type { Service } from "../types/Service";
import { mockServices } from "../data/mock-services";

export default function useServiceStatus() {
  const [services, setServices] = useState<Service[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setIsLoading(true)
    setError(null)
    
    setTimeout(() => {
      setServices(mockServices)
      setIsLoading(false)
    }, 1500)
  }, [])

  return {
    services,
    isLoading,
    error
  }
}