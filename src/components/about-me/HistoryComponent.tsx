"use client";
import React, { useState } from "react";
import FadeingList from "./FadeingList";

function HistoryComponent() {
  const years = [
    {
      year: "2024",
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
      year: "2023",
      projects: [
        {
          name: "Halkan",
          description: "bla",
          tools: [""],
          socials: [{ url: "Halkan.com", name: "Link" }],
        },
        {
          name: "Halkan",
          description: "bla",
          tools: [""],
          socials: [{ url: "Halkan.com", name: "Link" }],
        },
        {
          name: "Halkan",
          description: "bla",
          tools: [""],
          socials: [{ url: "Halkan.com", name: "Link" }],
        },
        {
          name: "Halkan",
          description: "bla",
          tools: [""],
          socials: [{ url: "Halkan.com", name: "Link" }],
        },
        {
          name: "Halkan",
          description: "bla",
          tools: [""],
          socials: [{ url: "Halkan.com", name: "Link" }],
        },
        {
          name: "Halkan",
          description: "bla",
          tools: [""],
          socials: [{ url: "Halkan.com", name: "Link" }],
        },
      ],
    },
    {
      year: "2022",
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
    <div className="flex gap-10">
      <FadeingList
        list={[...years.map((a) => a.year)]}
        callBack={(item) => selectItem(item)}
        currentItem={currentItem}
      />
      <div className="w-full grid grid-cols-3  ">
        {years[currentItem].projects!.map((project) => {
          return (
            <div className="p-5 bg-gray-400 shadow-lg h-fit w-fit rounded-2xl">
              {project.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HistoryComponent;
