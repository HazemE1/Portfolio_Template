import GenericButton from "../components/GenericButton";
import FAQComponent from "../components/FAQComponent";
import { LiaInstagram, LiaLinkedin, LiaMailchimp } from "react-icons/lia";
import { MdMail } from "react-icons/md";
import Link from "next/link";

import { animated } from "@react-spring/web";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Your Digital Architect - Hazem Elkhalil",
  description:
    "Empowering your online presence with bespoke web solutions. Get ready to elevate your brand!",
  keywords: [
    "freelance",
    "web development",
    "Next.js",
    "digital solutions",
    "branding",
  ],
  author: "Hazem Elkhalil",
  image: "/media/GraphQ/graphQ.png",
  url: "https://yourwebsite.com",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50  ">
      <section className="pagePaddings sm:p-5">
        <div className="maxWidth mx-auto">
          <div className="text-center flex items-center flex-col  gap-20 py-20">
            <div className="animate-fade-in opacity-0 ">
              <h1 className="text-7xl font-extrabold text-center text-gray-800">
                Hazem <br className="md:hidden" /> El-khalil
              </h1>
              <h2 className="text-2xl font-bold text-center text-gray-700 ">
                The architect of your digital world from apps to websites
              </h2>
            </div>
            <div className="px-3">
              <img
                className="animate-fade-in opacity-0 animate-delay-100 aspect-video rounded-3xl  md:h-[23rem]  xl:h-[29rem] overflow-hidden shadow-2xl shadow-blue-300/80"
                src="https://i.imgur.com/PmrEVik.png"
              ></img>
            </div>
            <div className="flex flex-col  gap-3 animate-fade-in animate-delay-150 opacity-0">
              <p className="text-gray-500 font-semibold text-xl">
                Unlock your digital dreams with me!
                <br /> Your shortcut to success in the complex world of
                technology!
              </p>
              <GenericButton
                text="Get to know me"
                Link={"/about-me"}
                className="  px-3 py-1"
              />
            </div>
            <div className="mt-16">
              <label className=" font-bold text-2xl animate-fade-in animate-delay-1000 opacity-0">
                Previous work
              </label>
              <div className="w-full mt-5 items-center gap-10 justify-items-center  justify-center   grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  ">
                <img
                  src={
                    "https://halkan.se/static/media/halkan-Logo.81a1bfd217b86f805fb8.webp"
                  }
                  alt={"partners-halkan"}
                  className="h-20 xl:h-2/3 opacity-0 animate-fade-in animate-delay-200  "
                ></img>

                <img
                  src={"https://static.spigotmc.org/img/spigot.png"}
                  alt={"partners-spigot"}
                  className="h-20 xl:h-2/3 opacity-0 animate-fade-in animate-delay-300"
                ></img>
                <img
                  src={"/media/logos/AssistenaLogo.png"}
                  alt={"partners-assistena"}
                  className="h-20 xl:h-2/3 opacity-0 animate-fade-in animate-delay-[400ms] "
                ></img>
                <img
                  src={"/media/logos/TIE.png"}
                  alt={"partners-TIE"}
                  className="h-20 xl:h-2/3 opacity-0 animate-fade-in animate-delay-500 "
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-200/30 pagePaddings py-20 sm:p-5">
        <div className="maxWidth mx-auto flex flex-col gap-10">
          <div className="flex gap-10 items-center">
            <div className="w-1/2 aspect-[3/2.23] shadow-2xl shadow-blue-300/50 rounded-xl bg-cover bg-right bg-no-repeat bg-[url(https://i.imgur.com/VtZDSLP.jpeg)]"></div>
            <div className="w-1/2 space-y-5">
              <h1 className="text-5xl font-bold">Fast</h1>
              <p className="text-2xl font-semibold text-gray-500">
                Get ahead of the competition
                <br /> with our lightning-fast service
              </p>
              <GenericButton text="Learn More" Link={""} />
            </div>
          </div>
          <div className="flex flex-row-reverse gap-10 items-center">
            <div className="w-1/2 aspect-[3/2.23]  bg-cover bg-center bg-no-repeat bg-[url(https://i.imgur.com/L0JVnFc.jpeg)] shadow-cyan-300/60 shadow-2xl rounded-xl"></div>
            <div className="w-1/2 space-y-5">
              <h1 className="text-5xl font-bold">Easy</h1>
              <p className="text-2xl font-semibold text-gray-500">
                Effortless web development <br />
                made easy.
              </p>
              <GenericButton text="Learn More" Link={""} />
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 pagePaddings sm:p-5">
        <div className="maxWidth mx-auto">
          <h1 className="text-7xl font-bold text-center mb-10">FAQ</h1>
          <FAQComponent />
        </div>
      </section>
      <section className="py-10 pagePaddings bg-gray-200/30 sm:p-5">
        <div className="maxWidth mx-auto">
          <h1 className="text-7xl font-bold text-center">Contact me</h1>

          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">
            Need a website? Get in touch and we will get it sorted!
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="name@example.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 "
            >
              Send message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
