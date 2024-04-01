import { Link } from "react-router-dom";
import { IconFacebook, IconYouTube } from "../icons/Icons";

export function Footer() {
  return (
    <footer>
      <section className="footer grid grid-col-1 justify-items-center items-center w-full h-[33vh] px-2 py-7 bg-ferry md:grid-col-2 md:grid-row-2 md:justify-items-stretch md:h-[25vh] md:pl-4 md:pr-6">
        <section className="flex text-sm font-normal text-center md:col-start-1 ">
          <p className="text-inherit text-peakPoint">
            <span className="mr-1 text-inherit text-white">Anime Online -</span>
            No videos are hosted on our servers.
          </p>
        </section>
        <nav className="w-full md:col-start-1 md:row-start-2">
          <ul className="flex flex-wrap justify-evenly items-center py-1 px-2 text-sm font-bold text-white rounded-3xl bg-[rgba(0,0,0,.3)]">
            <li className="hover:underline">
              <Link to={`/term-and-condition`}>Term and Conditions</Link>
            </li>
            <li className="hover:underline">
              <Link to={`/privacy-policy`}>Privacy Policy</Link>
            </li>
            <li className="hover:underline">
              <Link to={`/about`}>About AnimeFLV</Link>
            </li>
          </ul>
        </nav>
        <section className="flex justify-evenly items-center w-2/4 md:col-start-2 md:row-span-2 md:justify-self-end">
          <a
            className="flex items-center justify-center w-12 h-12 rounded-full bg-[rgba(0,0,0,.2)] hover:bg-[rgba(0,0,0,.5)]"
            href="https://www.facebook.com/?locale=es_LA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconFacebook
              width={30}
              height={30}
              styles={"ml-1 mt-1 text-white"}
            />
          </a>
          <a
            rel="noopener noreferrer"
            href="https://www.youtube.com/"
            target="_blank"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-[rgba(0,0,0,.2)] hover:bg-[rgba(0,0,0,.5)]"
          >
            <IconYouTube
              width={30}
              height={30}
              styles={"ml-1 mt-1 text-white"}
            />
          </a>
        </section>
      </section>
    </footer>
  );
}
