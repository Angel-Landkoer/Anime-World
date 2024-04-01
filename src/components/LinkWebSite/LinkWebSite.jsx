export function LinkWebSite({ color = "", text = "", link = "" }) {
  return (
    <a
      className={`w-24 py-1 px-3 text-xs text-center font-semibold uppercase text-${color} bg-white shadow-[0_2px_0] shadow-${color} rounded-md transition-all hover:-translate-y-1`}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
}
