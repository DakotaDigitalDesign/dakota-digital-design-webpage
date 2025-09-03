import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw, AlertTriangle } from "lucide-react";

interface ErrorFallbackProps {
  error?: Error | null;
  onRetry?: () => void;
}

const ErrorFallback = ({ error, onRetry }: ErrorFallbackProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <Card className="gradient-card shadow-card border-0 p-8 max-w-md mx-auto text-center">
        <div className="space-y-6">
          <div className="w-16 h-16 bg-destructive rounded-full flex items-center justify-center mx-auto">
            <AlertTriangle className="w-8 h-8 text-destructive-foreground" />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-card-foreground">
              Something went wrong
            </h3>
            <p className="text-muted-foreground text-sm">
              {error?.message || 'Unable to load content. Please check your connection and try again.'}
            </p>
          </div>
          
          {onRetry && (
            <Button onClick={onRetry} variant="primary" className="w-full">
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};

export default ErrorFallback;