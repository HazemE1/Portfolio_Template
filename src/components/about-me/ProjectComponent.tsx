import React from "react";
import { State } from "./HistoryComponent";

export interface ProjectCompnent {
  title: string;
  description: string;
  tools: string[];
  socials: { url: string; name: string }[];
  state: State;
}
function ProjectCompnent(props: ProjectCompnent) {
  const state =
    State[props.state].toUpperCase().substring(0, 1) +
    State[props.state].toLowerCase().substring(1);
  return (
    <div className="max-w-sm relative flex justify-between flex-col  bg-gray-100 shadow-blue-200/95 shadow-2xl rounded-md   select-none  p-3  h-full w-full ">
      <div className="absolute top-0 right-0 z-10  text-green-500 font-bold  rounded-xl p-2">
        <p className="text-[11px]">{state}</p>
      </div>
      <h5 className="mb-2 font-bold tracking-tight text-gray-900  ">
        {props.title}
      </h5>
      <div>
        <label className="font-semibold text-sm">Description</label>
        <p className=" font-normal text-sm text-gray-700 line-clamp-3 ">
          {props.description}
        </p>
      </div>
      <div>
        <p className="font-semibold text-sm ">Tools</p>
        <div className="flex flex-wrap  gap-1">
          {props.tools.map((tool) => (
            <p className="p-1 text-[10px] font-semibold w-fit bg-slate-200/50  rounded">
              {tool}
            </p>
          ))}
        </div>
      </div>

      <div className="flex items-center p-3 z-50 absolute inset-0 opacity-0 hover:opacity-100 duration-300 transition-all  font-medium text-center text-white bg-gray-200/95 rounded-lg cursor-pointer">
        <a className="text-center w-full text-green-500">Read more</a>
      </div>
    </div>
  );
}

export default ProjectCompnent;
