import FadeingList from "@/components/about-me/FadeingList";
import HistoryComponent from "@/components/about-me/HistoryComponent";
import React from "react";

function page() {
  return (
    <main className="flex min-h-screen  flex-col bg-gray-50  ">
      <section className="sm:p-5 flex  self-center h-full">
        <div className="maxWidth mx-auto ">
          <h1 className="font-extrabold text-4xl leading-tight">
            My name is Hazem El-khalil,
            <br /> I’m a Fullstack developer <br /> working and living in
            Sweden.
          </h1>
          <p className="text-2xl mt-5 font-semibold text-gray-500">
            I was born in Sweden and studied Software engeneering <br /> at the
            Malmö University. I have worked with web and app <br /> development
            as a lead developer for three years.
            <br />
            <br /> I believe that the success of a project is based on <br />
            good collaboration and being kind.
          </p>
          <div className="flex gap-10 mt-3 text-sm text-gray-600 font-bold">
            <a>Linkedin</a>
            <a>Mail</a>
          </div>
          <div className="mt-5">
            <label className="font-bold">My history</label>
            <HistoryComponent></HistoryComponent>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
