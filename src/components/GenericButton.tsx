"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";

interface GenericButtonProps {
  Link: string;
  text: string;
  className?: string;
}

function GenericButton(props: GenericButtonProps) {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/about-me");
      }}
      className={twMerge(
        "bg-gray-800 hover:bg-gray-900 duration-300 w-fit self-center text-white px-3 py-2 rounded-lg shadow-2xl ",
        props.className
      )}
    >
      {props.text}
    </button>
  );
}

export default GenericButton;
