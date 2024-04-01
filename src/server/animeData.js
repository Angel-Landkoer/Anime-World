export const getSearchAnime = async (params) => {
  const pageParams = params.queryKey[2]
  const search = params.queryKey[1]
  try {
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&page=${pageParams}&sfw`)

    if (!response.ok) {
      const messageError = await response.json()
      throw new Error("Try: ", messageError)
    }

    const data = await response.json()
    return data

  } catch (error) {
    console.error(error)
  }
}

export const getAnimeId = async (id) => {
  try {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`)

    if (!response.ok) {
      const messageError = await response.json()
      throw new Error("Try: ", messageError)
    }

    const data = await response.json()

    return data

  } catch (error) {
    console.error(error)
  }
}

export const getAnimeEpisodes = async (id) => {
  try {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/episodes`)

    if (!response.ok) {
      const messageError = await response.json()
      throw new Error("Try: ", messageError)
    }

    const data = await response.json()

    return data.data

  } catch (error) {
    console.error(error)
  }
}

export const getAnimeAir = async () => {
  try {
    const response = await fetch(`https://api.jikan.moe/v4/anime?page=2&status=airing&rating=pg13&start_date`)
    if (!response.ok) {
      const messageError = await response.json()
      console.log(messageError)
      throw new Error("Try: ", messageError)
    }

    const data = await response.json()

    return data?.data

  } catch (error) {
    console.error(error)
  }
}

export const getAnimeAirTV = async () => {
  try {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?status=airing&type=tv`
    );
    if (!response.ok) {
      const messageError = await response.json();
      throw new Error("Try: ", messageError);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(error);
  }
};

export const getAnimePage = async (params) => {
  const pageParams = params.queryKey[1]
  try {
    const response = await fetch(`https://api.jikan.moe/v4/anime?page=${pageParams}&order_by=popularity`)

    if (!response.ok) {
      const messageError = await response.json()
      throw new Error("Try: ", messageError.message)
    }
    const data = await response.json()
    return data

  } catch (error) {
    console.error(error)
    return error
  }
}

export const getAnimeAndEpisodes = async (params) => {
  const paramsId = params.queryKey[1]

  try {
    const anime = await getAnimeId(paramsId)
    const episodes = await getAnimeEpisodes(paramsId)

    return {
      anime: anime?.data,
      episodes,
    }
  } catch (error) {
    console.error(error)
    throw error
  }

}

export const getAnimeVideos = async (params) => {
  const id = params.queryKey[1]

  try {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/videos`)

    if (!response.ok) {
      const messageError = await response.json()
      throw new Error("Try: ", messageError)
    }

    const data = await response.json()
    return data?.data

  } catch (error) {
    console.error(error)
  }
}
