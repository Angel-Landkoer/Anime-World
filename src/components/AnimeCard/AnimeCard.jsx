import { Link } from "react-router-dom";
import { getTypeAnime, getTypeColor } from "../../utils/getTypesAnime";
import { CategoryAnime } from "../Categories/Categories";

export function AnimeCard({ data }) {
  const images = {
    img: data?.images?.jpg?.image_url,
    maxImg: data?.images?.jpg?.large_image_url,
  };

  const typeColor = getTypeColor(data.type);
  const typeAnime = getTypeAnime(data.type);

  return (
    <Link className="flex justify-center" to={`/anime/${data.mal_id}`}>
      <section className="flex flex-col justify-center items-center w-11/12 xs:w-48 xs:h-96 md:w-[217px] lg:w-[218px] xl:w-[200px]">
        <picture className="relative w-[250px] h-[400px]  xs:h-[90%] xs:w-full md:h-5/6">
          <source
            media="(min-width: 1024px)"
            className="w-full h-full rounded-t"
            srcSet={images.maxImg || ""}
          />
          <img
            className="w-full h-full rounded-t"
            src={images.img || ""}
            alt={`Image the ${data.title}`}
          />
          <CategoryAnime
            color={typeColor}
            type={typeAnime}
            isUppercase={true}
          />
        </picture>
        <section className="flex justify-center items-center w-full text-sm font-bold text-center text-black">
          <span className="text-inherit">{data.title}</span>
        </section>
      </section>
    </Link>
  );
}
