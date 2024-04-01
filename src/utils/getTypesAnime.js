export const getTypeColor = (type) => {
  const typeAnime = String(type).toLowerCase().trim()
  const a = {
    'tv': "#01BCF3",
    'ova': "#ff7e00",
    'special': "#ff8000",
    'movie': "#fb3447",
    'tv special' : "#0083aa",
    'ona' : "#767676"
  }

  if (!a[typeAnime]) return;

  return a[typeAnime]
}

export const getTypeAnime = (type) => {
  const typeAnime = String(type).toLowerCase()
  if (typeAnime == "tv") return "anime"
  return typeAnime
}

export const getTypeColorStatus = (type) => {
  const status = {
    'Finished Airing' : "#fb3447",
    'Currently Airing' : "#01ae43",
    'Not yet aired' : "#2F353A"
  }

  if (!status[type]) return;
  
  return status[type]
} 