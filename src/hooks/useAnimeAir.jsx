import { useQuery } from "@tanstack/react-query";
import { getAnimeAir } from "../server/animeData";

export function useAnimeAir() {
  const { data, isError, isLoading, error, isFetched } = useQuery({
    queryKey: ["Anime-air"],
    queryFn: getAnimeAir,
  });

  return { data, isError, isLoading, error, isFetched };
}
