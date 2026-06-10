interface LoadingStateProps {
  label: string;
  variant?: 'block' | 'grid';
  items?: number;
}

interface ErrorStateProps {
  message: string;
}

export function LoadingState({ label, variant = 'block', items = 3 }: LoadingStateProps) {
  if (variant === 'grid') {
    return (
      <div className="skeleton-grid" role="status" aria-live="polite" aria-label={label}>
        {Array.from({ length: items }).map((_, index) => (
          <span className="skeleton-card" key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="loading-state" role="status" aria-live="polite">
      <span className="loading-state__spinner" aria-hidden="true" />
      {label}
    </div>
  );
}

export function ErrorState({ message }: ErrorStateProps) {
  return (
    <div className="error-state" role="alert">
      {message}
    </div>
  );
}
