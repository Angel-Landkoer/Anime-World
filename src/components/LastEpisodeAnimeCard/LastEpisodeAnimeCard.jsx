import { Link } from "react-router-dom";
import { CategoryEpisode } from "../Categories/Categories";

export function LastEpisodeAnimeCard({ data }) {
  const nameAnime =
    data?.title.split(" ").splice(0, 3).join(" ").concat("...") || "NaN";

  const images = {
    img: data?.images?.jpg?.image_url,
    lastImg: data?.images?.jpg?.large_image_url,
  };

  return (
    <Link
      style={{ backgroundImage: `url(${images.img})` }}
      className={`w-11/12 h-48 rounded-md bg-cover bg-no-repeat shadow-md shadow-black xs:w-[45%] xs:h-36 xs:max-w-xs md:w-52 md:h-32 lg:w-[218px] xl:w-[200px]`}
      to={`/detail/watch/${data?.mal_id}`}
    >
      <section
        className={`flex flex-col justify-end items-start w-full h-full pl-2 pb-2 text-white`}
      >
        <CategoryEpisode isUppercase={false} numberE={data?.episodes} />
        <span className="block text-base text-inherit font-bold">
          {nameAnime}
        </span>
      </section>
    </Link>
  );
}
