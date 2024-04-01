export function CategoryAnime({ color, type, isUppercase }) {
  const text = String(type);
  const upperOrLower = isUppercase ? "uppercase" : "lowercase";
  return (
    <span
      style={{ backgroundColor: color }}
      className={`absolute bottom-3 left-1 py-0.5 px-5 text-xs font-bold ${upperOrLower} text-white rounded-2xl`}
    >
      {text}
    </span>
  );
}

export function CategoryEpisode({ numberE, isUppercase }) {
  const episode = String(Number(numberE));
  const upperOrLower = isUppercase ? "uppercase" : "lowercase";

  return (
    <span className="block text-sm px-4 text-inherit font-medium bg-yellowOrange rounded-full md:text-xs md:px-2">
      Episode
      <span className={`font-bold ml-1 ${upperOrLower}`}>{episode}</span>
    </span>
  );
}
