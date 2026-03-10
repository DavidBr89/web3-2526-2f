import React, { type HTMLAttributes, type PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface MyButtonProps
  extends PropsWithChildren, HTMLAttributes<HTMLButtonElement> {}

const MyButton = (props: MyButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        "bg-teal-600 hover:bg-teal-500 text-white font-bold px-4 py-2 rounded-xl cursor-pointer",
        props.className,
      )}>
      {props.children}
    </button>
  );
};

export default MyButton;
