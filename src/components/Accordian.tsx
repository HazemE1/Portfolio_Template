"use client";
import React, { useEffect, useRef, useState } from "react";
import { HiOutlinePlusSm } from "react-icons/hi";

interface AccordianProps {
  title: string;
  content: string;
}
function Accordian({ title, content }: AccordianProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setHeight(ref.current!.getBoundingClientRect().height);
    } else {
      setHeight(0);
    }
  }, [open]);

  return (
    <div className=" p-3 ">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center cursor-pointer select-none gap-3"
      >
        <HiOutlinePlusSm className={`${open ? "-rotate-45" : ""} text-xl  `} />
        <p className="font-bold">{title}</p>
      </div>
      <div
        style={{ height: height }}
        className={`mt-4 whitespace-break-spaces overflow-hidden transition-all duration-1000 px-8`}
      >
        <div ref={ref} dangerouslySetInnerHTML={{ __html: `${content}` }}></div>
      </div>
      <hr className="bg-gray-600/10 h-[1.9px] mt-3" />
    </div>
  );
}

export default Accordian;
