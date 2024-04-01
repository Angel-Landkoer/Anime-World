import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAnimePagination } from "../../hooks/useAnimePagination";
import { useStateDirectory } from "../../store/statePagination";
import { getAnimePage, getSearchAnime } from "../../server/animeData";
import { Error } from "../../components/Error/Error";
import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";
import { Pagination } from "../../components/Pagination/Pagination";
import { Loading } from "../../components/Loading/Loading";
import { AnimeCard } from "../../components/AnimeCard/AnimeCard";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { FiltrationForm } from "../../components/FiltrationForm/FiltrationForm";

export function AnimeDirectory() {
  const [filter, setFilter] = useState([]);

  const { state, handleIncrement, handleDecrement, handleReset } =
    useStateDirectory((s) => s);

  const params = useParams();
  const paramData = params?.search;
  const fnAnime = paramData ? getSearchAnime : getAnimePage;
  const qKey = paramData
    ? [`anime-${paramData || ""}`, paramData, state]
    : ["animePage", state];

  useEffect(() => {
    return () => {
      handleReset();
    };
  }, [paramData]);

  const {
    error,
    isError,
    isFetching,
    isLoading,
    data: result,
  } = useAnimePagination({ queryKey: qKey, fn: fnAnime });

  if (isLoading) return <Loading />;
  if (isError) return <Error error={error} />;

  const { pagination, data: animeData } = result;

  const has_next_page = pagination?.has_next_page;
  const validator = () =>
    handleIncrement({
      has_next_page,
      loading: isLoading,
      error: isError,
    });

  const isFilter = Boolean(filter.length);
  const aData = isFilter ? filter : animeData;

  return (
    <>
      <header>
        <section className="header">
          <NavBar />
        </section>
      </header>
      <main>
        <section className="main my-6 xs:px-4 md:px-12">
          <section className="flex flex-col justify-evenly items-center w-full h-72">
            <SectionTitle title="Complete list of Anime" />
            <FiltrationForm data={animeData} setState={setFilter} />
          </section>
          <Pagination
            isError={isError}
            isFetch={isFetching}
            isLoading={isLoading}
            page={state}
            lastPage={handleDecrement}
            nextPage={validator}
          />
          <section className="flex flex-wrap items-center justify-evenly gap-y-3 xs:gap-0">
            {aData.map((item) => {
              const id = window.crypto.randomUUID();
              return <AnimeCard data={item} key={`animeD-${id}`} />;
            })}
          </section>
          <Pagination
            isError={isError}
            isFetch={isFetching}
            isLoading={isLoading}
            page={state}
            lastPage={handleDecrement}
            nextPage={validator}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
