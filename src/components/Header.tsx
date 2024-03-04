import Link from "next/link";
import React from "react";

export enum Page {
  HOME,
  ABOUT,
  PREVIOUS,
}
function Header(props: { page: Page }) {
  return (
    <div>
      <ul className="flex w-full gap-5 ">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li className={`${props.page === Page.ABOUT && "font-bold"}`}>
          <Link
            aria-disabled={props.page === Page.ABOUT}
            className={`${
              props.page === Page.ABOUT &&
              "pointer-events-none underline underline-offset-8 text-gray-500"
            }`}
            href={"/about-me"}
          >
            About Me
          </Link>
        </li>
        <li className={`${props.page === Page.PREVIOUS && "font-bold"}`}>
          <Link
            aria-disabled={props.page === Page.PREVIOUS}
            className={`${
              props.page === Page.PREVIOUS &&
              "pointer-events-none underline underline-offset-8 text-gray-500"
            }`}
            href={"/previous-work"}
          >
            Previous Work
          </Link>
        </li>
      </ul>
      <hr className="opacity-70 mt-2" />
    </div>
  );
}

export default Header;
