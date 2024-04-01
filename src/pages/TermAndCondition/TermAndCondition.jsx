import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";

export function TermAndCondition() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <section className="main">
          <article className="w-4/5 my-10 mx-auto">
            <SectionTitle title="Conditions of Use" />
            <section className="flex flex-col gap-y-4 p-3 mt-2 text-base font-medium text-white bg-black rounded-lg">
              <p className="text-inherit">
                When you, the user, provide us with personal information through
                Animeflv.net (hereinafter, the "Website"), we respect your
                privacy and the rights recognized by the regulations on the
                protection of personal data. Therefore, it is important that you
                understand what information we collect about you during your
                visit and what we do with such information which will be subject
                to the following policy on the processing of personal data.
              </p>
              <p className="text-inherit">
                We recommend to read carefully the following points about our
                Privacy Policy; which will provide total security that you are
                within a site that protects your information and identity.
              </p>
              <p className="text-inherit">
                Security and protection of personal data: The security of your
                personal data is a priority for this website which offers total
                security. However, we are not responsible for the activities of
                hackers or third parties who perform actions to damage break the
                security that each site provides. Taking into consideration the
                technical characteristics of information transmission over the
                Internet, no system is 100% secure or exempt from attacks.
              </p>
              <p className="text-inherit">
                Responsibility for opinions: This website is only responsible
                for the publications here exposed as posts, but not for the
                comments of these, since they are made by third parties and/or
                visitors to the site.
              </p>

              <p className="text-inherit">
                Your Privacy: This website respects the privacy of each of its
                visitors. All information entered by the user through our
                website will be treated with the utmost security, and will only
                be used in accordance with the limitations set forth in this
                document.
              </p>
              <p className="text-inherit">
                Use of information: By providing personal data, you
                automatically authorize us to use your personal data in
                accordance with our Privacy Policy, which includes the following
                events: a) for the specific purpose for which you have provided
                it; b) to increase our offer to the market and advertise
                products that may be of interest to the user, including calls
                for confirmation of your information; c) to customize and
                improve our products and services, and d) to send e-mails with
                our newsletters, respond to concerns or comments, and keep our
                users informed.
              </p>

              <p className="text-inherit">
                Access to your information: The website has an ongoing
                commitment to present new solutions that enhance the value of
                its products and services; in order to offer special market
                opportunities, such as incentives, promotions and updated news.
                Animeflv does not market, sell or rent its database to other
                companies.
              </p>
              <p className="text-inherit">
                Use of Cookies: This website uses cookies and IP address only to
                obtain general information about its users and to provide them
                with a personalized site. For this purpose, we keep a record of:
                browser, operating system used by the user/visitor, Internet
                Service Provider domain name.In addition, we keep a record of
                the total number of visitors which allows us to make
                improvements to our site. Cookies allow us to deliver content
                tailored to the interests and needs of our users/visitors.
                Cookies may also be used by Third Parties that are present on
                this Weblog, such as advertisers or advertisements on this
                Weblog, for the sole purpose of providing additional or
                reelevant information to the User's Navigation on this Website.
              </p>
              <p className="text-inherit">
                Disclosure of information: At no time is used or disclosed to
                third parties, individual user information as well as data about
                visits, or information provided to us: name, address, email
                address, telephone number, etc.
              </p>

              <p className="text-inherit">
                Modifications to our Privacy Policy: The website reserves the
                exclusive right to modify, rectify, alter, add or delete any
                point of this document at any time and without prior notice.
              </p>
              <p className="text-inherit">
                Statistics and other sites related to Animeflv.
              </p>

              <p className="text-inherit">
                This blog works different applications that evidently can make
                use of Cookies stored in your Equipment or use some script for
                the good operation of this blog.Currently these cookies only
                collect statistical information, in no case they seek to collect
                important information.
              </p>
              <p className="text-inherit">
                Currently these cookies only collect statistical information, in
                no case do they seek to collect information of an important
                nature.
              </p>
            </section>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
