export function FiltrationForm({ setState, data = [] }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target;

    const formData = Object.fromEntries(new FormData(text));

    const filter = data.filter((anime) => {
      const type = anime.type == formData.type;
      const statusAnime =
        anime.status.toLowerCase() == formData.status.toLocaleLowerCase();
      const genreSome = anime.genres.some(
        (genre) => genre.name.toLocaleLowerCase() == formData.thematic_genre
      );

      return type || statusAnime || genreSome;
    });

    setState(filter);
    e.target.reset();
  };

  const handleApplyFilter = () => setState(data);

  return (
    <form
      className="flex flex-wrap justify-center items-center gap-2 md:gap-3 lg:gap-4"
      onSubmit={handleSubmit}
    >
      <label className="px-2.5 py-1 bg-white rounded" htmlFor="thematic_genre">
        <span className="text-ferry lg:text-lg">Thematic Genre: </span>
        <select
          className="lg:text-lg"
          name="thematic_genre"
          id="thematic_genre"
        >
          <option value="">Select a genre</option>
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="comedy">Comedy</option>
          <option value="sci-fi">Sci-Fi</option>
          <option value="drama">Drama</option>
          <option value="fantasy">Fantasy</option>
          <option value="romance">Romance</option>
          <option value="horror">Horror</option>
        </select>
      </label>

      <label className="px-2.5 py-1 bg-white rounded" htmlFor="status">
        <span className="text-ferry lg:text-lg">Status: </span>
        <select className="lg:text-lg" name="status" id="status">
          <option value="">Select a status: </option>
          <option value="currently airing">Currently Airing</option>
          <option value="finished airing">Finished Airing</option>
          <option value="not yet aired">Not yet aired</option>
        </select>
      </label>
      <label className="px-2.5 py-1 bg-white rounded" htmlFor="type">
        <span className="text-ferry lg:text-lg">Type: </span>
        <select className="lg:text-lg" name="type" id="type">
          <option value="">Select a Type</option>
          <option value="TV">Anime</option>
          <option value="Movie">Movie</option>
          <option value="OVA">OVA</option>
        </select>
      </label>
      <div className="flex flex-wrap justify-center items-center gap-2">
        <button
          className="px-4 py-1 text-base font-bold text-white bg-blueBikini rounded-md lg:text-lg"
          type="submit"
        >
          Filter
        </button>
        <button
          className="px-4 py-1 text-base font-bold text-white bg-blueBikini rounded-md lg:text-lg"
          onClick={handleApplyFilter}
        >
          Clear
        </button>
      </div>
    </form>
  );
}
