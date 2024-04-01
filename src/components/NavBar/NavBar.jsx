import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  IconClose,
  IconMenuMobile,
  IconSearch,
  IconUser,
} from "../icons/Icons";
import Logo from "../../assets/animeW.png";

function NavMobile({ handleSubmit }) {
  return (
    <section
      className="navMobile fixed bottom-1 left-0 flex flex-col justify-start items-start w-64 h-screen p-5 bg-ferry z-10 shadow-md shadow-black 
        lg:static lg:flex-row-reverse lg:items-center lg:gap-x-3 lg:w-full lg:h-full lg:shadow-none"
    >
      <form
        className="w-full py-2 px-3 bg-[rgba(0,0,0,.2)] rounded-full
          lg:w-64"
        onSubmit={handleSubmit}
      >
        <label
          id="search_anime"
          htmlFor="search_anime"
          className="flex justify-evenly items-center w-full"
        >
          <input
            type="search"
            name="search_anime"
            className="w-full border-0 font-bold text-whiteBlue bg-transparent placeholder:p-2 focus-visible:outline-none"
            placeholder="Search Anime"
          />
          <button type="submit">
            <IconSearch styles={`text-white`} />
          </button>
        </label>
      </form>
      <button
        className="flex justify-start items-center w-full px-2 py-3 my-4 text-base font-bold text-white bg-[rgba(0,0,0,.2)]
        lg:justify-center lg:w-36 lg:px-4"
      >
        <IconUser styles={`mr-1 text-inherit`} />
        <span className="ml-1 text-inherit">Login</span>
      </button>
      <ul
        className="flex flex-col items-start justify-start w-full text-lg font-semibold uppercase text-whiteBlue
        lg:flex-row lg:items-center lg:justify-evenly lg:w-60 lg:font-bold"
      >
        <li className="py-4">
          <Link className="text-inherit" to={`/`}>
            Home
          </Link>
        </li>
        <li className="py-4">
          <Link className="text-inherit" to={`/directory`}>
            Directory
          </Link>
        </li>
      </ul>
    </section>
  );
}

function NavDesktop({ handleSubmit }) {
  return (
    <section
      className="navDesktop hidden 
        lg:static lg:flex lg:flex-row-reverse lg:items-center lg:gap-x-3 lg:w-full lg:h-full lg:shadow-none"
    >
      <form
        className="py-2 px-3 lg:bg-[rgba(0,0,0,.2)] lg:rounded-full
          lg:w-64"
        onSubmit={handleSubmit}
      >
        <label
          id="search_anime"
          htmlFor="search_anime"
          className="flex justify-evenly items-center w-full"
        >
          <input
            id="search_anime"
            type="search"
            name="search_anime"
            className="w-full border-0 font-bold text-whiteBlue bg-transparent placeholder:p-2 focus-visible:outline-none"
            placeholder="Search Anime"
          />
          <button type="submit">
            <IconSearch styles={`text-white`} />
          </button>
        </label>
      </form>
      <button
        className="lg:flex lg:text-base lg:font-bold lg:text-white lg:bg-[rgba(0,0,0,.2)]
        lg:justify-center lg:w-32 lg:p-2.5"
      >
        <IconUser styles={`lg:mr-1 lg:text-inherit`} />
        <span className="lg:ml-1 lg:text-inherit">Login</span>
      </button>
      <ul className="lg:uppercase lg:text-whiteBlue lg:flex lg:items-center lg:justify-evenly lg:w-60 lg:font-bold">
        <li className="lg:py-4">
          <Link className="text-inherit" to={`/`}>
            Home
          </Link>
        </li>
        <li className="lg:py-4">
          <Link className="text-inherit" to={`/directory`}>
            Directory
          </Link>
        </li>
      </ul>
    </section>
  );
}

export function NavBar() {
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = e.target;

    const data = Object.fromEntries(new FormData(formData));
    if (!data.search_anime) return;

    const text = data.search_anime.toLowerCase().split(" ").join("-").trim();

    navigate(`/directory/${text}`);
    e.target.reset();
  };

  const handleChangeToggle = () => setToggle(!toggle);

  const iconColor = toggle ? "bg-redSalsa" : "bg-blueBikini";

  return (
    <nav
      className="
    relative flex justify-between items-center w-full h-20 pl-3 bg-ferry 
    lg:static lg:px-10
    "
    >
      <Link to={`/`}>
        <figure className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20">
          <img className="w-full h-full" src={Logo} alt="Logo" />
        </figure>
      </Link>

      {toggle ? (
        <NavMobile handleSubmit={handleSubmit} />
      ) : (
        <NavDesktop handleSubmit={handleSubmit} />
      )}

      <section className="iconMobileMenu w-32 lg:hidden">
        <button
          className="flex justify-evenly items-center w-full"
          onClick={handleChangeToggle}
          htmlFor=""
        >
          <span className="text-sm font-medium text-white ">Menu</span>
          <div className={`p-2 ${iconColor} rounded-full`}>
            {toggle ? (
              <IconClose styles={`w-6 h-6 text-white`} />
            ) : (
              <IconMenuMobile styles={`w-6 h-6 text-white`} />
            )}
          </div>
        </button>
      </section>
    </nav>
  );
}
