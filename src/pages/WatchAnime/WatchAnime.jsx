import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { NavBar } from "../../components/NavBar/NavBar";
import {
  IconChevronLeft,
  IconChevronRight,
  IconList,
} from "../../components/icons/Icons";
import { Loading } from "../../components/Loading/Loading";
import { Error } from "../../components/Error/Error";
import { useAnimeWatch } from "../../hooks/useAnimeWatch";

function WatchNav({ control, animeId, nextEpisode, lastEpisode }) {
  return (
    <section className="col-span-2 flex justify-center items-center w-52 bg-ferry rounded-3xl">
      <button
        onClick={lastEpisode}
        disabled={control <= 0}
        className="flex justify-center items-center w-2/5 h-8"
      >
        <IconChevronLeft size={`1em`} />
      </button>
      <Link
        to={`/anime/${animeId}`}
        className="flex justify-center items-center w-1/5 h8 border-x border-black"
      >
        <IconList size={"1em"} color={`#ffc107`} />
      </Link>
      <button
        onClick={nextEpisode}
        className="flex justify-center items-center w-2/5 h-8"
      >
        <IconChevronRight size={`1em`} />
      </button>
    </section>
  );
}

export function WatchAnime() {
  const [control, setControl] = useState(0);

  const params = useParams();
  const animeId = params.animeId;

  const {
    data: result,
    isError,
    error,
    isLoading,
    isFetched,
  } = useAnimeWatch({ queryK: [`watch-anime-${animeId}`, animeId] });

  if (isLoading) return <Loading />;
  if (isError) return <Error error={error} />;

  const dataVideos = result;

  const videoLength = dataVideos.promo.length;
  const arrData = dataVideos?.promo.at(control) || [];
  const trailer = arrData?.trailer;
  const titleVideo = arrData?.title;
  // Crear condicional para limitar avanze
  const nextEpisode = () => setControl(control + 1);
  const lastEpisode = () => setControl(control - 1);

  return (
    <>
      <header>
        <section className="header">
          <NavBar />
        </section>
      </header>
      <main>
        <section className="main p-3">
          <section className="my-2">
            <section className="">{/* LINKS */}</section>
            <h2 className="text-3xl font-bold text-left"></h2>
          </section>
          <section className="grid grid-cols-2 justify-items-center gap-y-5 w-full">
            <section className="flex items-center justify-center col-span-2 w-full h-72 rounded-lg bg-black">
              <video
                src={`${trailer?.url}`}
                type="video/mp4"
                poster={`${trailer?.images?.medium_image_url}`}
                controls={true}
                title={`title is ${titleVideo || "none"}`}
                preload="auto"
                loop
                muted
                autoPlay
                className="w-full h-60"
              />
            </section>
            <WatchNav
              control={control}
              animeId={animeId}
              nextEpisode={nextEpisode}
              lastEpisode={lastEpisode}
            />
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
