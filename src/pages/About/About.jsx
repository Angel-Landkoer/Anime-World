import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";

export function About() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <section className="main">
          <article className="w-4/5 my-10 mx-auto">
            <SectionTitle title="About" />

            <section className="flex flex-col gap-y-4 p-3 mt-2 text-base font-medium text-white bg-black rounded-lg">
              <p className="text-inherent">
                AnimeFLV.NET, aims to provide you with a wide catalog of anime
                that are not broadcast on TV channels in open signal, in order
                to share with all our followers the largest number of episodes
                and anime series that come out each year.
              </p>
              <p className="text-inherent">
                We know our limitations and that is why we always try to
                innovate in the quality of service, we try every month to make
                business partnerships with the best companies in order to
                provide you with a better experience and evolve as a platform so
                that very soon we can watch Anime Online videos in a legal way.
              </p>
              <p className="text-inherent">
                Every month we are implementing improvements and we do our best
                to improve day by day. In our FanPage AnimeFLV you can find out
                about any news on the website, currently we do not have
                intrusive advertising so that our users can navigate without any
                problem on our platform.
              </p>
              <p className="text-inherent">
                Besides being a website to visualize Anime Episodes, hosted in
                external servers outside AnimeFLV, we try to be a reference to
                share Asian culture. So in the not too distant future we have
                some very good updates coming that will really surprise you.
              </p>
              <p className="text-inherent">
                We are convinced that we are the Number 1 Anime Online Website
                in Spanish and all this is thanks to your support for us.
              </p>
              <p className="text-inherent">
                Finally many people have asked us why? the term FLV, the term
                FLV became popular by the years 2008-2010 when the online videos
                did not exceed the quality of 480p (usually were 360p), the most
                popular format at that time was the FLV format, as each episode
                could weigh up to 16MB being very fast to play, this makes
                sense, since by those years the broadband was almost zero
                throughout Latin America Sand that's how the term was born,
                AnimeFLV.
              </p>
            </section>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
