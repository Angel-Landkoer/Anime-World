import { useQuery } from "@tanstack/react-query";
import { getAnimeVideos } from "../server/animeData";

export function useAnimeWatch({ queryK }) {
  const {
    data: result,
    isError,
    error,
    isLoading,
    isFetched,
  } = useQuery({
    queryKey: queryK,
    queryFn: getAnimeVideos,
  });

  return {
    data: result,
    isError,
    error,
    isLoading,
    isFetched,
  };
}
