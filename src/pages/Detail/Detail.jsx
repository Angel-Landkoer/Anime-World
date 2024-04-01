import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";
import { getAnimeAndEpisodes } from "../../server/animeData";
import { CategoryAnime } from "../../components/Categories/Categories";
import {
  getTypeColor,
  getTypeAnime,
  getTypeColorStatus,
} from "../../utils/getTypesAnime";
import {
  IconBookMark,
  IconCheck,
  IconCirclePlay,
  IconHeart,
  IconImg,
  IconSortDown,
  IconStarColor,
  IconStarHalfColor,
  IconTV,
} from "../../components/icons/Icons";
import { LinkWebSite } from "../../components/LinkWebSite/LinkWebSite";
import { EpisodeCard } from "../../components/EpisodeCard/EpisodeCard";
import { Loading } from "../../components/Loading/Loading";
import { Error } from "../../components/Error/Error";

export function Detail() {
  const [filterEpisode, setFilterEpisode] = useState([]);
  const [isSort, setIsSort] = useState(false);

  const params = useParams();
  const paramAnimeId = params.animeId;

  const {
    data: result,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: [`animeDetail-${paramAnimeId}`, paramAnimeId],
    queryFn: getAnimeAndEpisodes,
  });

  if (isLoading) return <Loading />;
  if (isError) return <Error error={error} />;
  if (!result) return <Error error={``} />;

  const anime = result?.anime;
  const episodes = result?.episodes;
  const scoreAnime = Math.floor(anime?.score);
  const genresAnime = anime?.genres;
  const typeColor = getTypeColor(anime?.type);
  const typeAnime = getTypeAnime(anime?.type);
  const typeStatusColor = getTypeColorStatus(anime?.status);
  const isCurrentAnime = anime.status == "Currently Airing";

  const handleChangeInput = (e) => {
    const text = e.target.value.toLowerCase();
    const filterInput = episodes.filter((item) =>
      item.title.toLowerCase().includes(text)
    );

    setFilterEpisode(filterInput);
  };

  const titles = anime?.titles;
  const titleUnit = [...new Set(titles.map((title) => title.title))];

  const toggleSort = () => setIsSort(!isSort);
  const sortListDESC = (a, b) => b.mal_id - a.mal_id;
  const sortEpisodes = !isSort
    ? episodes.toSorted()
    : episodes.toSorted(sortListDESC);

  const sortFilter = !isSort
    ? filterEpisode.toSorted()
    : filterEpisode.toSorted(sortListDESC);

  const mapEpisodes = (sortFilter.length && sortFilter) || sortEpisodes;

  const imgJPG = anime?.images?.jpg;

  const img = {
    min: imgJPG.small_image_url,
    medium: imgJPG.image_url,
    max: imgJPG.large_image_url,
  };

  return (
    <>
      <header>
        <section className="header">
          <NavBar />
        </section>
      </header>
      <main>
        <section className="main md:flex md:flex-col md:j md:gap-y-12">
          <section className="initialData grid grid-cols-1 justify-items-center items-center gap-3 w-full px-2 pb-4 pt-2 bg-black md: md:justify-self-stretch md:grid-cols-2 md:grid-rows-2 md:justify-items-stretch md:gap-1 md:w-full md:px-4">
            <section className="flex items-center gap-2 md:col-start-1 md:row-start-1">
              <h1 className="text-3xl text-center font-bold text-white">
                {anime.title}
              </h1>
              <span
                style={{ backgroundColor: typeColor }}
                className="px-4 text-sm font-bold text-white rounded-full uppercase"
              >
                {typeAnime}
              </span>
            </section>
            <ul className="flex flex-wrap justify-center items-center gap-2 text-sm text-center text-whiteBlue md:col-start-1 md:row-start-2">
              {titleUnit.map((item) => (
                <li
                  key={`title_${item}`}
                  className="px-3 bg-black rounded-full"
                >
                  {item}
                </li>
              ))}
            </ul>
            <section className="md:justify-self-end flex flex-col justify-evenly items-center w-auto h-28 md:col-start-2 row-span-2">
              <section className="flex justify-center items-center w-48 h-14">
                <section className="flex justify-center items-center w-2/6 h-full bg-blueBikini rounded-l-sm">
                  <span className="text-4xl font-bold text-white">
                    {scoreAnime}
                  </span>
                </section>
                <section className="flex flex-col justify-center items-center w-2/3 h-full bg-[rgba(66,66,66,.9)] rounded-r-sm">
                  <div className="flex gap-0.5">
                    <IconStarColor size={"1.1em"} color={"#ffc602"} />
                    <IconStarColor size={"1.1em"} color={"#ffc602"} />
                    <IconStarColor size={"1.1em"} color={"#ffc602"} />
                    <IconStarColor size={"1.1em"} color={"#ffc602"} />
                    <IconStarHalfColor color={"#ffc602"} />
                  </div>
                  <span className="text-xs font-bold text-white">
                    {anime.popularity}{" "}
                    <span className="font-medium">VOTES</span>
                  </span>
                </section>
              </section>
              <section className="flex gap-x-1">
                <LinkWebSite
                  link="https://www.facebook.com/?locale=es_LA"
                  text="Facebook"
                  color={`toryBlue`}
                />
                <LinkWebSite
                  link="https://twitter.com/?lang=es"
                  text="Twitter"
                  color={`blueBikini`}
                />
              </section>
            </section>
          </section>
          <section className="md:flex md:flex-row md:justify-center md:w-full md:my-7 lg:p-5 ">
            <aside className="md:w-2/5">
              <section className="aside flex flex-col justify-center gap-y-4 my-8 mx-auto px-3 max-w-xs md:w-full md:pl-2 md:my-0 lg:max-w-sm">
                <picture className="self-center w-11/12 h-80 rounded-sm md:w-full md:h-full">
                  <source
                    className="w-full h-full"
                    media="(min-width: 1024px)"
                    srcSet={img.max}
                  />
                  <img className="w-full h-full" src={img.medium} alt={``} />
                </picture>
                <section className="grid grid-cols-2 justify-items-center gap-2 text-sm font-medium uppercase md:w-full">
                  <div
                    style={{ backgroundColor: typeStatusColor }}
                    className="col-span-2 flex justify-center items-center w-11/12 py-3 rounded-lg md:w-full"
                  >
                    <IconTV size={`1.7em`} />
                    <span className="ml-5 text-inherit text-white">
                      {anime.status}
                    </span>
                  </div>
                  <div className="col-span-1 flex justify-evenly items-center w-5/6 py-3 rounded-lg bg-white md:w-full">
                    <div className="flex justify-center items-center w-9 h-9 bg-redSalsa rounded-full">
                      <IconHeart size={"1.5em"} />
                    </div>
                    <span className="text-inherit">
                      Add to <br /> favorite
                    </span>
                  </div>
                  <div className="col-span-1 flex justify-evenly items-center w-5/6 py-3 rounded-lg bg-white md:w-full">
                    <div className="flex justify-center items-center w-9 h-9 bg-blueBikini rounded-full">
                      <IconCheck size={"1.5rem"} />
                    </div>
                    <span className="text-inherit">
                      Anime <br /> Follow
                    </span>
                  </div>
                  <div className="col-span-2 flex justify-center items-center w-11/12 py-3 rounded-lg bg-white md:w-full">
                    <IconBookMark color={`#ff7e00`} size={`1.7em`} />
                    <span className="ml-5 text-inherit">Waiting list</span>
                  </div>
                </section>
                <section className="flex flex-col gap-y-10 w-11/12 mx-auto p-5 bg-white rounded-md md:w-full">
                  <span className="text-lg">
                    Followers: {""}
                    <span className="text-lg font-bold text-blueBikini">
                      {anime.members}
                    </span>
                  </span>
                  <section className="grid grid-cols-3 justify-items-center gap-3">
                    <span
                      className={"block w-14 h-14 rounded-full bg-redSalsa"}
                    />
                    <span
                      className={"block w-14 h-14 rounded-full bg-redSalsa"}
                    />
                    <span
                      className={"block w-14 h-14 rounded-full bg-redSalsa"}
                    />
                    <span
                      className={"block w-14 h-14 rounded-full bg-redSalsa"}
                    />
                    <span
                      className={"block w-14 h-14 rounded-full bg-redSalsa"}
                    />
                    <span
                      className={"block w-14 h-14 rounded-full bg-redSalsa"}
                    />
                  </section>
                </section>
              </section>
            </aside>
            <section className="md:flex md:flex-col md:items-center md:w-3/5">
              <section className="flex flex-col items-start gap-y-5 w-11/12 my-0 mx-auto p-4 bg-white rounded-sm md: md: md:p-6 md:m-0">
                <h4 className="text-lg font-bold uppercase text-ferry">
                  Overview
                </h4>
                <ul className="flex flex-wrap items-center justify-evenly gap-3 text-sm font-bold text-blueBikini">
                  {genresAnime.map((item) => (
                    <li
                      className="flex items-center justify-evenly px-3 h-6 bg-[rgba(1,188,242,.1)] rounded-full"
                      key={`genresAnime-${item.name}`}
                    >
                      <Link className="w-full h-full" to={`/`}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <p className="text-base text-suzuGrey">{anime?.synopsis}</p>
              </section>
              <section className="w-11/12 my-5 mx-auto p-4 bg-white rounded-lg md: md: md:p-6">
                <h4 className="mb-4 text-lg font-bold uppercase text-ferry">
                  Episode List
                </h4>
                <section className="flex items-center gap-x-2">
                  <button
                    onClick={toggleSort}
                    className={`flex justify-center items-center w-1/4 h-10 rounded-lg ${
                      isSort ? "bg-ferry opacity-50" : "bg-blueBikini"
                    }`}
                  >
                    <IconSortDown size={`1.5em`} />
                  </button>
                  <label className="w-3/4 h-10" htmlFor="search" id="search">
                    <input
                      id="search"
                      type="text"
                      name="search"
                      onChange={handleChangeInput}
                      className="w-full h-full px-3 border-2 border-suzuGrey rounded-lg"
                      placeholder="Search"
                    />
                  </label>
                </section>
                <section className="containerList flex flex-col justify-evenly items-center w-full mt-5">
                  <ul className="list w-11/12 h-80 overflow-y-scroll">
                    {isCurrentAnime && (
                      <>
                        <li className="flex justify-around items-center h-20 my-1">
                          <IconCirclePlay size={`1.5em`} color={`#01ae43`} />

                          <section className="flex justify-center items-center gap-x-3 my-1 text-xs text-ferry">
                            <IconImg size={`4em`} color={`#01ae43`} />
                            <span className="text-base uppercase font-bold text-poisonIvy">
                              Next Episode
                            </span>
                          </section>
                        </li>
                        <span className="block border border-suzuGrey" />
                      </>
                    )}

                    {mapEpisodes.map((item) => {
                      const id = window.crypto.randomUUID();

                      return (
                        <>
                          <EpisodeCard
                            key={`episode-${id}_${anime.title}`}
                            link={anime?.mal_id}
                            data={item}
                            i={item.mal_id}
                          />
                          <span className="block border border-suzuGrey" />
                        </>
                      );
                    })}
                  </ul>
                </section>
              </section>
              {/*  */}

              {/* don't do comments the comments */}

              {/*  */}
            </section>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
