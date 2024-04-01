import { Link } from "react-router-dom";
import { IconCircleXmark } from "../icons/Icons";

export function Error({ error = {} }) {
  const message = error?.message;
  const stack = error?.stack;
  const result = message ? message : "Null-NaN";
  return (
    <>
      <main>
        <section className="main flex flex-col justify-evenly items-center w-full h-screen bg-suzuGrey">
          <section className="flex justify-evenly items-center w-2/4 my-0 mx-auto">
            <IconCircleXmark size={`2.5em`} color={`#fb3447`} />
            <h2 className="text-5xl font-bold text-redSalsa">Error</h2>
          </section>
          <ul className="w-3/4 p-2 border text-lg list-disc border-ferry rounded-lg">
            <li className="block font-bold text-redSalsa">
              Message: <span className="font-medium text-black">{result}</span>
            </li>
          </ul>
          <Link
            className="p-3 text-lg font-bold text-white bg-bluePlaza opacity-75 rounded-xl hover:bg-opacity-40"
            to={`/`}
          >
            Return Home
          </Link>
        </section>
      </main>
    </>
  );
}
