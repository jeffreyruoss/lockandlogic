interface Window {
  turnstile?: {
    reset: (widgetId?: string) => void;
    render: (container: string | HTMLElement, options: Record<string, unknown>) => string;
    remove: (widgetId: string) => void;
  };
}
