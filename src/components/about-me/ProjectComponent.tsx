import React from "react";

export interface ProjectCompnent {
  title: string;
  description: string;

  tools: string[];
  socials: { url: string; name: string }[];
}
function ProjectCompnent(props: ProjectCompnent) {
  return (
    <div className="max-w-sm relative flex justify-between flex-col bg-gray-200 border border-gray-200 rounded-md  overflow-hidden select-none  p-3  h-full w-full ">
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
            <p className="p-1 text-[10px] font-semibold w-fit bg-gray-100  rounded">
              {tool}
            </p>
          ))}
        </div>
      </div>

      <div className="flex items-center p-3  absolute inset-0 opacity-0 hover:opacity-100 duration-300 transition-all  font-medium text-center text-white bg-gray-200/95 rounded-lg cursor-pointer">
        <a className="text-center w-full text-green-500">Read more</a>
      </div>
    </div>
  );
}

export default ProjectCompnent;
