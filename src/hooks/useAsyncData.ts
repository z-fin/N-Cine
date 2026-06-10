import { useEffect, useState } from 'react';

interface AsyncDataState<T> {
  data: T | null;
  error: string | null;
  isLoading: boolean;
}

export function useAsyncData<T>(
  loadData: () => Promise<T>,
  errorMessage: string,
): AsyncDataState<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function load() {
      try {
        setIsLoading(true);
        setError(null);
        const response = await loadData();

        if (isMounted) {
          setData(response);
        }
      } catch {
        if (isMounted) {
          setError(errorMessage);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    void load();

    return () => {
      isMounted = false;
    };
  }, [errorMessage, loadData]);

  return { data, error, isLoading };
}
