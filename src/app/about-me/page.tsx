import Face from "@/components/Face";
import Footer from "@/components/Footer";
import Header, { Page } from "@/components/Header";
import React from "react";
import { GrGithub, GrLinkedin } from "react-icons/gr";

function page() {
  const className = "font-bold text-gray-700";
  return (
    <main className="flex justify-between  min-h-screen  flex-col bg-gray-50  ">
      <section className="sm:p-5 flex flex-col   self-center ">
        <div className="maxWidth w-2/3">
          <Header page={Page.ABOUT} />
        </div>
        <div className="maxWidth mx-auto h-full  flex  ">
          <p className="text-2xl w-2/3 text-justify mt-5 font-semibold text-gray-500  styled-scrollbars overflow-y-scroll">
            <strong className="text-black">Hello, I'm Hazem Elkhalil,</strong>a
            seasoned software developer with a deep passion for creating
            outstanding digital experiences.
            <br /> <br />
            With over a decade of experience in the field, I bring a wealth of
            knowledge and skills to the table as your trusted software
            development consultant.
            <br /> <br />
            From my early start in Java at the age of 13, I have expanded my
            expertise to include front-end and back-end development, covering a
            wide range of programming languages such as{" "}
            <span className={className}>React</span>,{" "}
            <span className={className}>Nextjs</span>,{" "}
            <span className={className}>GCP</span>,{" "}
            <span className={className}>Java</span>,{" "}
            <span className={className}>C#</span>,{" "}
            <span className={className}>Node.js</span>, and more. My proficiency
            extends beyond coding; I am also well-versed in cloud technologies
            like <span className={className}>AWS</span> and{" "}
            <span className={className}>Firebase</span>, as well as databases
            such as <span className={className}>MySQL</span> and{" "}
            <span className={className}>SQLite</span>.
            <br /> <br />
            Passion is at the core of everything I do. It drives me to
            constantly stay updated with the latest industry trends, tools, and
            best practices. This dedication ensures that I bring cutting-edge
            solutions to your projects, keeping you at the forefront of the
            rapidly evolving technology landscape.
            <br /> <br />I pride myself on my ability to understand your unique
            requirements and translate them into practical and scalable software
            solutions. Clear and open communication is crucial to our
            collaboration, and I will work closely with you to ensure that your
            vision and goals are met at every stage of the development process.
            <br /> <br />
            By choosing me as your software development consultant, you gain a
            committed partner who genuinely cares about your success. I approach
            every project with unwavering enthusiasm, striving for excellence
            and delivering high-quality work that surpasses expectations. Your
            satisfaction is my top priority, and I will go above and beyond to
            ensure that your projects are executed flawlessly, on time, and
            within budget. Together, we can navigate the challenges of the
            digital landscape and unlock the transformative power of innovative
            software solutions for your organization.
            <br /> <br />
            <span className={className}>
              Let's embark on this exciting journey together and achieve
              remarkable results.
            </span>
          </p>
          <div className="w-1/3 flex flex-col items-center  ">
            <div className="p-5 border-[10px] h-64 w-64 flex justify-center items-center rounded-full bg-gray-100">
              <Face />
            </div>
            <a className="text-gray-700 mt-5 italic font-semibold">
              Kontakt@hazemelkhalil.com
            </a>
            <div className="flex flex-col mt-5  gap-5 my-2">
              <a className="flex flex-col  items-center  ">
                <GrGithub className="text-5xl" />
                HazemE1
              </a>
              <a className="flex flex-col  items-center">
                <GrLinkedin className="text-5xl" />
                Hazem-Elkhalil
              </a>
            </div>
            <a className="text-gray-700 mt-5 italic font-semibold">
              Contact me
            </a>
          </div>
        </div>
      </section>
      <div className=" w-full">
        <Footer />
      </div>
    </main>
  );
}

export default page;

/*           <div className="mt-5 ">
            <label className="font-bold">My history</label>
            <HistoryComponent />
          </div> */
