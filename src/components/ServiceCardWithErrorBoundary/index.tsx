import React, { Component } from "react";
import type { ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

interface ServiceCardErrorBoundaryState {
  hasError: boolean;
}

interface ServiceCardErrorBoundaryProps {
  children: ReactNode;
  serviceName?: string;
}

class ServiceCardErrorBoundary extends Component<
  ServiceCardErrorBoundaryProps,
  ServiceCardErrorBoundaryState
> {
  constructor(props: ServiceCardErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ServiceCardErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ServiceCard Error:", error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <Card className="border border-red-200 shadow-sm rounded-lg col-span-1 max-w-[300px] md:max-w-full bg-red-50 dark:bg-red-950/20 dark:border-red-800">
          <CardContent className="flex flex-col gap-4 items-center justify-center min-h-[120px]">
            <div className="flex flex-col items-center gap-2">
              <AlertTriangle className="w-8 h-8 text-red-500" />
              <h3 className="font-semibold text-red-700 dark:text-red-400">
                Erro no Card
              </h3>
              {this.props.serviceName && (
                <p className="text-sm text-red-600 dark:text-red-300 text-center">
                  Falha ao carregar: {this.props.serviceName}
                </p>
              )}
            </div>

            <Button
              onClick={this.handleRetry}
              className="flex items-center gap-2 px-3 py-1 bg-red-100 hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-900/50 text-red-700 dark:text-red-300 rounded-md text-sm transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Tentar novamente
            </Button>
          </CardContent>
        </Card>
      );
    }

    return this.props.children;
  }
}

export default ServiceCardErrorBoundary;
