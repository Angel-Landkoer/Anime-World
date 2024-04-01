export function Pagination({
  isLoading,
  isError,
  isFetch,
  nextPage,
  lastPage,
  page,
}) {
  return (
    <ul className="flex justify-evenly items-center w-full my-10">
      <li>
        <button
          title="Previous Page"
          disabled={isError || isFetch || isLoading}
          onClick={lastPage}
          className="py-1 px-2 font-medium text-black bg-white rounded shadow-lg hover:transition-all hover:duration-500 hover:ease-in-out hover:text-white hover:bg-blueBikini xs:px-2.5 xs:py-3"
        >
          Last Page
        </button>
      </li>
      <li className="hidden xs:flex xs:p-3 xs:border xs:font-normal xs:border-ferry xs:rounded xs:shadow">
        Page: {page}
      </li>
      <li>
        <button
          title="Next Page"
          onClick={nextPage}
          disabled={isError || isFetch || isLoading}
          className="py-1 px-2 font-medium text-black bg-white rounded shadow-lg hover:transition-all hover:duration-500 hover:ease-in-out hover:text-white hover:bg-blueBikini xs:px-2.5 xs:py-3"
        >
          Next Page
        </button>
      </li>
    </ul>
  );
}
