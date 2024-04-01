import { Link } from "react-router-dom";
import { IconCirclePlay } from "../icons/Icons";

export function EpisodeCard({ data, i, link }) {
  return (
    <li className="flex justify-around items-center h-20 my-1">
      <IconCirclePlay size={`1.5em`} color={`#01bcf3`} />

      <section className="flex flex-col justify-center items-center w-36 my-1 text-xs text-ferry">
        <Link
          className="font-bold text-center text-inherit hover:text-blueBikini"
          to={`/detail/watch/${link}`}
        >
          {data.title}
        </Link>
        <span className="font-normal text-inherit">Episode {i}</span>
      </section>
    </li>
  );
}
