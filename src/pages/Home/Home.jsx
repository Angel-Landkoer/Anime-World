import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";
import { AnimeCard } from "../../components/AnimeCard/AnimeCard";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { ModalAnimeAir } from "../../components/ModalAnimeAir/ModalAnimeAir";
import { LastEpisodeAnimeCard } from "../../components/LastEpisodeAnimeCard/LastEpisodeAnimeCard";
import { useAnimeAir } from "../../hooks/useAnimeAir";
import { Loading } from "../../components/Loading/Loading";
import { Error } from "../../components/Error/Error";

export function Home() {
  const { data, error, isError, isLoading } = useAnimeAir();

  if (isLoading) return <Loading />;
  if (isError) return <Error error={error} />;

  return (
    <>
      <header>
        <section className="header w-full">
          <NavBar />
        </section>
      </header>
      <main>
        <section className="flex flex-col items-center justify-center gap-y-6 w-full py-5 md:flex-row md:justify-evenly md:px-4 lg:gap-y-5 lg:px-6 xl:px-4">
          <ModalAnimeAir />
          <section className="w-full md:w-[60%] lg:w-3/4">
            <h2 className="self-start ml-4 text-2xl font-normal">
              Latest episodes
            </h2>
            <section className="flex flex-wrap items-center justify-evenly gap-y-5 w-full my-5 py-1 xs:gap-4 md:p-0 md:gap-y-5">
              {data.map((item) => {
                const id = window.crypto.randomUUID();

                return (
                  <LastEpisodeAnimeCard key={`AnimeAir-${id}`} data={item} />
                );
              })}
            </section>
            <section className="flex flex-col justify-center items-center w-full xs:px-4 md:p-0">
              <SectionTitle title="Latest anime added" />
              <section className="flex flex-wrap items-center justify-evenly gap-y-5 xs: xs:gap-5 md:gap-3 lg: xl: xl:gap-3">
                {data.map((item) => {
                  const id = window.crypto.randomUUID();
                  return <AnimeCard key={`animeA-${id}`} data={item} />;
                })}
              </section>
            </section>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
