"use client";
import React from "react";
import { motion } from "framer-motion";
import "./BackgroundBoxes.scss";

export const BackgroundBoxes = React.memo(({ classNames = "", ...rest }: { classNames?: string }) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);
  // const colors = [
  //   "--sky-300",
  //   "--pink-300",
  //   "--green-300",
  //   "--yellow-300",
  //   "--red-300",
  //   "--purple-300",
  //   "--blue-300",
  //   "--indigo-300",
  //   "--violet-300",
  // ];
  // const getRandomColor = () => {
  //   return colors[Math.floor(Math.random() * colors.length)];
  // };

  return (
    <div
      className={`background-boxes-wrapper ${classNames}`}
      // style={{
      //   transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      // }}
      // className={cn(
      //   "absolute left-1/4 p-4 -top-1/4 flex  -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 ",
      //   className,
      // )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="background-boxes-rows" /** className="w-16 h-8  border-l  border-slate-700 relative" */
        >
          {cols.map((_, j) => (
            <motion.div
              onHoverStart={() => console.log("hovering")}
              whileHover={{
                backgroundColor: `#f8f3f3`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              // className="w-16 h-8  border-r border-t border-slate-700 relative"
              className="background-boxes-columns"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#000"
                  className="background-boxes"
                  // className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-700 stroke-[1px] pointer-events-none"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
});

