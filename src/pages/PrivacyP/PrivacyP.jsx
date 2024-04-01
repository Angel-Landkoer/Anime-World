import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";
import { BasicArticle } from "../../components/BasicArticle/BasicArticle";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";

export function PrivacyP() {
  return (
    <>
      <header>
        <section className="header">
          <NavBar />
        </section>
      </header>
      <main>
        <section className="main flex flex-col items-center justify-evenly w-full ">
          <section className="w-4/5 mt-8">
            <SectionTitle title="Privacy Policy" />
          </section>
          <BasicArticle
            text="The Privacy Policy establishes the terms in which AnimeFLV uses and protects the information that is provided 
        by its users when using its website. This company is committed to the security of its users' data. When we ask you to provide 
        personal information by which you can be identified, we do so with the assurance that it will only be used in accordance with the 
        terms of this document. However, this Privacy Policy may change over time or be updated and we encourage you to continually review 
        this page to ensure that you agree to any such changes."
          />
          <BasicArticle
            title="Information that is collected"
            text="Our website may collect personal information such as name, contact information such as your email address and 
          demographic information. Also, when necessary, specific information may be required to process an order or make a delivery or 
          billing."
          />

          <BasicArticle
            title="Use of Information Collected"
            text="Our website uses the information in order to provide the best possible service, particularly to 
          keep track of users, to keep track of orders if applicable, and to improve our products and services. We may 
          periodically send emails through our site with special offers, new products and other advertising information that 
          we feel may be relevant to you or may be of benefit to you, these emails will be sent to the address you provide and 
          may be unsubscribed from at any time. AnimeFLV is highly committed to fulfilling our commitment to keeping your information secure.
          We use the most advanced systems and constantly update them to ensure that there is no unauthorized access."
          />
          <BasicArticle
            title="Cookie"
            text="A cookie refers to a file that is sent with the purpose of requesting permission to be stored on your computer, by 
          accepting this file is created and the cookie is then used to have information regarding web traffic, and also facilitates 
          future visits to a recurring website. Another function that cookies have is that with them the web can recognize you individually 
          and therefore provide you with the best personalized service on its website. Our website uses cookies to identify the pages that are 
          visited and their frequency. This information is used only for statistical analysis and then the information is permanently deleted. 
          You can delete cookies at any time from your computer. However, cookies help to provide a better service from websites, they do not 
          give access to information about your computer or you, unless you choose to provide it directly. You can accept or deny the use of 
          cookies, however most browsers automatically accept cookies as it serves to have a better web service. You can also change the 
          settings on your computer to decline cookies. If you decline cookies you may not be able to use some of our services."
          />

          <BasicArticle
            title="Links to Third Parties"
            text="This website may contain links to other sites that may be of interest to you. Once you click on these links and leave our site, 
        we no longer have control over the site to which you are redirected and therefore we are not responsible for the terms or privacy or 
        data protection of those other third party sites. Those sites are subject to their own privacy policies and we recommend that you check
        with them to confirm that you agree with them."
          />

          <BasicArticle
            title="Controlling your personal information"
            text="At any time you may restrict the collection or use of personal information that is provided to our website. 
          Whenever you are asked to fill out a form, such as a registration form, you can check or uncheck the option to receive 
          information by e-mail. In case you have checked the option to receive our newsletter or advertising you can cancel it at 
          any time. This company will not sell, give away or distribute the personal information that is collected without your consent, 
          unless required by a judge with a court order. AnimeFLV reserves the right to change the terms of this Privacy Policy at any time."
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
