import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { AnimeDirectory } from "../pages/AnimeDirectory/AnimeDirectory";
import { Detail } from "../pages/Detail/Detail";
import { About } from "../pages/About/About";
import { PrivacyP } from "../pages/PrivacyP/PrivacyP";
import { TermAndCondition } from "../pages/TermAndCondition/TermAndCondition";
import { WatchAnime } from "../pages/WatchAnime/WatchAnime";
import { ErrorPage } from "../pages/404/ErrorPage";

export function Main_router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/directory",
      element: <AnimeDirectory />,
    },
    {
      path: "/directory/:search",
      element: <AnimeDirectory />,
    },
    {
      path: "/term-and-condition",
      element: <TermAndCondition />,
    },
    {
      path: "/privacy-policy",
      element: <PrivacyP />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/anime/:animeId",
      element: <Detail />,
    },
    {
      path: "/detail/watch/:animeId",
      element: <WatchAnime />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
