"use client";
import React from "react";

interface FadingListProps {
  list: string[];
  callBack: (selected: string) => void;
  currentItem: number;
}
function FadeingList(props: FadingListProps) {
  const previousIndex =
    props.currentItem === 0
      ? props.list.length - props.currentItem - 1
      : props.currentItem - 1;
  const previousItem = props.list[previousIndex];
  return (
    <ul>
      <li
        style={{ opacity: 0.95 }}
        className="text-3xl w-fit select-none font-extrabold text-gray-500 cursor-pointer hover:scale-110 hover:!opacity-100 transition-all duration-300 "
        onClick={() => props.callBack(previousItem)}
        key="previous"
      >
        {previousItem}
      </li>
      {props.list.map((item, index) => {
        const listLength = props.list.length;
        const currentIndex = (props.currentItem + index) % listLength;
        const opacity = index >= 0 && index <= 4 ? 1 - index / 5 : 0;
        if (opacity === 0) return;
        return (
          <li
            style={{ opacity: opacity }}
            className={`w-fit text-3xl select-none font-extrabold ${
              currentIndex === props.currentItem
                ? "text-gray-700"
                : "text-gray-500 hover:scale-110"
            } cursor-pointer hover:!opacity-100 transition-all duration-300`}
            onClick={() => {
              console.log(props.list[currentIndex]);
              props.callBack(props.list[currentIndex]);
            }}
            key={props.list[currentIndex]}
          >
            {props.list[currentIndex]}
          </li>
        );
      })}
    </ul>
  );
}

export default FadeingList;
