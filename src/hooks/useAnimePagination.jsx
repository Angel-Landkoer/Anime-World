import { useQuery } from "@tanstack/react-query";

export function useAnimePagination({ queryKey, fn }) {
  const {
    data: result,
    isError,
    error,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey,
    queryFn: fn,
  });

  return {
    data: result,
    isError,
    error,
    isLoading,
    isFetching,
  };
}
