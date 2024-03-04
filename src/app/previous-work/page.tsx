import Face from "@/components/Face";
import Footer from "@/components/Footer";
import Header, { Page } from "@/components/Header";
import VideoComponent from "@/components/previous-work/VideoComponent";
import { LoremIpsum } from "lorem-ipsum";
import React from "react";
import { GrGithub, GrLinkedin } from "react-icons/gr";

function page() {
  const lorem = new LoremIpsum();
  return (
    <main className="flex justify-between  min-h-screen  flex-col bg-gray-50  ">
      <div>
        <div className="maxWidth mx-auto p-5 ">
          <Header page={Page.PREVIOUS} />
        </div>
        <section className="flex flex-col maxWidth mx-auto gap-5 w-full p-20 ">
          <h1 className="text-3xl font-extrabold">Recent projects</h1>

          <div className="w-full flex flex-col gap-2  ">
            <p className="text-3xl text-gray-700 font-bold">Assistena</p>
            <div className="w-full aspect-video rounded-2xl bg-black ">
              <VideoComponent
                bgurl="https://i.imgur.com/2Vd0LFM.png"
                src={["/media/vids/vid2.mp4", "/media/vids/vid2.mov"]}
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="text-3xl text-gray-700 font-bold">Halkan</p>
            <div className="w-full aspect-video rounded-2xl bg-black ">
              <VideoComponent
                bgurl="https://i.imgur.com/9g9r8uJ.png"
                src={["/media/vids/vid1.mp4", "/media/vids/vid1.mov"]}
              />
            </div>
          </div>
          <div className="w-full flex justify-between  ">
            <div className="w-1/3">
              <label className="font-bold">Story</label>
              <p>
                Lorem est labore et duis sunt ad. Ad eu excepteur veniam
                consequat qui magna non. Laborum fugiat et et do do ut aliquip
                ipsum id mollit nostrud dolore.
              </p>
            </div>
            <div className="w-1/3">
              <label className="font-bold">Goal</label>

              <p>
                Lorem est labore et duis sunt ad. Ad eu excepteur veniam
                consequat qui magna non. Laborum fugiat et et do do ut aliquip
                ipsum id mollit nostrud dolore.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className=" w-full">
        <Footer />
      </div>
    </main>
  );
}

export default page;
