"use client";
import React, { useState } from "react";
import FadeingList from "./FadeingList";
import ProjectCompnent from "./ProjectComponent";

function HistoryComponent() {
  const years = [
    {
      year: "2024",
      projects: [
        {
          name: "Assistena",
          description:
            "Your AI companion for seamless studies and top-notch results. Optimize study performance, save time, and enhance grades with our advanced tool!",
          tools: ["NextJS", "React", "Firebase", "GCS", "Tailwind"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
        {
          name: "Halkan",
          description:
            "På Halkan.se vill vi göra din bokning av din riskutbildning så enkel som möjligt",
          tools: ["ReactJS", "MUI", "Firebase", "NodeJS"],
          socials: [{ url: "Halkan.com", name: "Link" }],
        },
      ],
    },
    {
      year: "2023",
      projects: [
        {
          name: "Halkan",
          description:
            "På Halkan.se vill vi göra din bokning av din riskutbildning så enkel som möjligt",
          tools: ["ReactJS", "MUI", "Firebase", "NodeJS"],
          socials: [{ url: "Halkan.com", name: "Link" }],
        },
        {
          name: "Assistena",
          description:
            "Your AI companion for seamless studies and top-notch results. Optimize study performance, save time, and enhance grades with our advanced tool!",
          tools: ["NextJS", "React", "Firebase", "GCS", "Tailwind"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
      ],
    },
    {
      year: "2022",
      projects: [
        {
          name: "Halkan",
          description:
            "På Halkan.se vill vi göra din bokning av din riskutbildning så enkel som möjligt",
          tools: ["ReactJS", "MUI", "Firebase", "NodeJS"],
          socials: [{ url: "Halkan.com", name: "Link" }],
        },
      ],
    },
    {
      year: "2021",
      projects: [
        {
          name: "Assistena",
          description: "bla",
          tools: ["NextJS"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
        {
          name: "Assistena",
          description: "bla",
          tools: ["NextJS"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
        {
          name: "Assistena",
          description: "bla",
          tools: ["NextJS"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
        {
          name: "Assistena",
          description: "bla",
          tools: ["NextJS"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
        {
          name: "Assistena",
          description: "bla",
          tools: ["NextJS"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
        {
          name: "Assistena",
          description: "bla",
          tools: ["NextJS"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
      ],
    },
    {
      year: "2020",
      projects: [
        {
          name: "Assistena",
          description: "bla",
          tools: ["NextJS"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
        {
          name: "Assistena",
          description: "bla",
          tools: ["NextJS"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
        {
          name: "Assistena",
          description: "bla",
          tools: ["NextJS"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
        {
          name: "Assistena",
          description: "bla",
          tools: ["NextJS"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
        {
          name: "Assistena",
          description: "bla",
          tools: ["NextJS"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
        {
          name: "Assistena",
          description: "bla",
          tools: ["NextJS"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
      ],
    },
    {
      year: "2019",
      projects: [
        {
          name: "Assistena",
          description: "bla",
          tools: ["NextJS"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
        {
          name: "Assistena",
          description: "bla",
          tools: ["NextJS"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
        {
          name: "Assistena",
          description: "bla",
          tools: ["NextJS"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
        {
          name: "Assistena",
          description: "bla",
          tools: ["NextJS"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
        {
          name: "Assistena",
          description: "bla",
          tools: ["NextJS"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
        {
          name: "Assistena",
          description: "bla",
          tools: ["NextJS"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
      ],
    },
    {
      year: "2018",
      projects: [
        {
          name: "Assistena",
          description: "bla",
          tools: ["NextJS"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
        {
          name: "Assistena",
          description: "bla",
          tools: ["NextJS"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
        {
          name: "Assistena",
          description: "bla",
          tools: ["NextJS"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
        {
          name: "Assistena",
          description: "bla",
          tools: ["NextJS"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
        {
          name: "Assistena",
          description: "bla",
          tools: ["NextJS"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
        {
          name: "Assistena",
          description: "bla",
          tools: ["NextJS"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
      ],
    },
    {
      year: "2017",
      projects: [
        {
          name: "Assistena",
          description: "bla",
          tools: ["NextJS"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
        {
          name: "Assistena",
          description: "bla",
          tools: ["NextJS"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
        {
          name: "Assistena",
          description: "bla",
          tools: ["NextJS"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
        {
          name: "Assistena",
          description: "bla",
          tools: ["NextJS"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
        {
          name: "Assistena",
          description: "bla",
          tools: ["NextJS"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
        {
          name: "Assistena",
          description: "bla",
          tools: ["NextJS"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
      ],
    },
    {
      year: "2016",
      projects: [
        {
          name: "Assistena",
          description: "bla",
          tools: ["NextJS"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
        {
          name: "Assistena",
          description: "bla",
          tools: ["NextJS"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
        {
          name: "Assistena",
          description: "bla",
          tools: ["NextJS"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
        {
          name: "Assistena",
          description: "bla",
          tools: ["NextJS"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
        {
          name: "Assistena",
          description: "bla",
          tools: ["NextJS"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
        {
          name: "Assistena",
          description: "bla",
          tools: ["NextJS"],
          socials: [{ url: "Assistena.com", name: "Link" }],
        },
      ],
    },
  ];
  const [currentItem, setCurrentItem] = useState<number>(0);

  const selectItem = (item: string) => {
    const index = years.findIndex((year) => year.year === item);
    setCurrentItem(index);
  };

  return (
    <div className="flex gap-10 w-full  ">
      <FadeingList
        list={[...years.map((a) => a.year)]}
        callBack={(item) => selectItem(item)}
        currentItem={currentItem}
      />
      <div className=" gap-5 grid grid-cols-2">
        {years[currentItem].projects!.map((project, index) => (
          <div key={index} className="h-full  w-[382px] ">
            <ProjectCompnent
              title={project.name}
              description={project.description}
              tools={project.tools}
              socials={project.socials}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HistoryComponent;
