import { useState } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "../Spinner/Spinner";
import { IconChevronDown, IconChevronUp, IconPlay } from "../icons/Icons";
import { getTypeAnime, getTypeColor } from "../../utils/getTypesAnime";
import { useAnimeAir } from "../../hooks/useAnimeAir";

export function ModalAnimeAir() {
  const [toggle, setToggle] = useState(false);

  const { data, isError = true, error, isLoading } = useAnimeAir();

  if (isError) return <h2>Error: {error}</h2>;

  const handleChangeToggle = () => setToggle(!toggle);

  const lowerWords = (text) => text.split(" ").splice(0, 2).join(" ");

  return (
    <section className="flex flex-col justify-center items-center self-start w-11/12 my-0 mx-auto bg-whiteBlue rounded-t md:w-2/5 md:m-0 lg:w-1/4 xl:max-w-xs ">
      <section
        className="flex items-center justify-between w-full h-11 px-9 md:px-5"
        onClick={handleChangeToggle}
      >
        <section className="flex justify-center items-center md:gap-x-3">
          <IconPlay width={24} height={24} styles="text-shadeAmber" />
          <h3 className="ml-3 text-base font-semibold uppercase">
            Anime on air
          </h3>
        </section>
        {toggle ? (
          <IconChevronUp
            styles={`pl-1 border-l border-ferry md:hidden`}
            width={24}
            height={24}
          />
        ) : (
          <IconChevronDown
            styles={`pl-1 border-l border-ferry md:hidden`}
            width={24}
            height={24}
          />
        )}
      </section>
      <section
        className={`w-11/12 overflow-y-scroll h-60 bg-whiteBlue md:overflow-visible md:w-full ${
          !toggle ? "hidden" : "block"
        } md:flex`}
      >
        {isLoading && <Spinner color={`blueBikini`} status="loading" />}

        <ul className="w-full bg-inherit">
          {data.map((item, i) => {
            const typeColor = getTypeColor(item.type);
            const typeAnime = getTypeAnime(item.type);
            const id = window.crypto.randomUUID();

            return (
              <li key={`AnimeAir-${id}`}>
                <Link
                  to={`/anime/${item.mal_id}`}
                  className="flex items-center justify-between w-full h-full text-inherit p-3 text-sm font-medium text-ferry hover:text-blueBikini"
                >
                  <IconPlay styles={`w-5 h-5 text-suzuGrey`} />
                  {lowerWords(item.title)}
                  <span
                    style={{ backgroundColor: typeColor }}
                    className={`px-3 text-white rounded-2xl bg-blueBikini md:px-2.5 md:text-xs md:font-bold`}
                  >
                    {typeAnime}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
}
